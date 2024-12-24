import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@repo/db/client"
import bcrypt from 'bcrypt'
import { Account, NextAuthOptions, Session  , Profile} from "next-auth"
import { JWT } from "next-auth/jwt"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials", 
            credentials: {
                phone: {label: "Phone Number" , type:"text" , placeholder:"1212121212" , required: true},
                password: {label: "Password" , type:"text" , required: true}
            },
            async authorize(credentials) {
                if(!credentials?.password || !credentials.phone){
                    return null
                }
                const hashedPassword = await bcrypt.hash(credentials.password , 10)
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                })

                if(existingUser){
                    const passwordValidate = await bcrypt.compare(credentials.password , existingUser.password)
                    if(passwordValidate){
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number,
                        }
                    }
                    return null
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    })
    
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    }
                } catch (error) {
                    console.log(error)
                }
                return null
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks :  {
        async jwt({
            token,
            account,
            profile,
          }: {
            token: JWT;
            account?: Account | null;
            profile?: Profile;
          }) {
            const user = await prisma.user.findUnique({
              where: { email: token?.email as string },
            });
      
            if (account && profile && user) {
              token.email = profile.email as string;
              token.id = String(user.id);
            }
            return token;
          },
        async session({session , token} : {session: Session , token: JWT}){
            if(token) {
                session.user = {
                    ...session.user,
                    email: token.email,
                    name: token.name
                }
            }
            return session
        },
        async signIn() {
            return true
        }
    }
} satisfies NextAuthOptions