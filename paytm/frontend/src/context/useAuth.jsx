/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const[user , setUser] = useState(null)
    const [loading ,setLoading] = useState(false)
    const [error , setError ] = useState(null)

    const SignUp = async (username , email , password) => {
        try {
            setLoading(false)
            const res = await fetch(`http://localhost:7000/api/v1/users/signup` , {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username , email , password})
            })
            if(!res.ok){
                throw new Error(data.message || "Something went wrong")
            }
            const data = await res.json()
            console.log(data)
            setUser(data.user)
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }
    const SignIn = async (email , password) => {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:7000/api/v1/users/signin` , {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            if(!res.ok){
                throw new Error(data.message || "Something went wrong")
            }
            const data = await res.json()
            setUser(data.user)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    const SignOut = () => {
        setUser(null)
    }

    const value = {
        user,
        loading,
        error,
        SignUp,
        SignIn,
        SignOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}