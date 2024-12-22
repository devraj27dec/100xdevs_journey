/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable turbo/no-undeclared-env-vars */

import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import prisma from "@repo/db/client"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials", 
            credentials: {
                phone: {label: "Phone Number" , type:"text" , placeholder:"1212121212" },
                password: {label: "Password" , type:"text"}
            },
            async authorize(credentials: any){
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                })
                if(existingUser) {
                    const passwodValidation = await bcrypt.compare(credentials.password, existingUser.password)
                
                    if(passwodValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name:existingUser.name,
                            email:existingUser.number
                        }
                    }
                    return null
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number:credentials.phone,
                            password: credentials.password
                        }
                    })

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch (error) {
                    console.error(error)
                }

                return null
            } 
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({token , session} : any) {
            session.user.id = token.sub;
            return session;
        }
    }
}