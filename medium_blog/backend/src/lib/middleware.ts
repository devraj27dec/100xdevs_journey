import { Context } from "hono";
import { verify } from "hono/jwt";

export type JwtPayload = {
    id: string;  
};

export const useAuthenticated = async (c:Context , next:Function) => {
    const authHeader = c.req.header('Authorization') || "";
    const user = await (verify(authHeader , c.env.JWT_SECRET!)) as JwtPayload
    if(user){
        c.set('userId' , user.id)
        c.json({
            msg:"User loggedIn Succesfully"
        })
        await next()
    }else {
        c.status(403)
        return c.json({msg:"Please loggedIn first"})
    }
}