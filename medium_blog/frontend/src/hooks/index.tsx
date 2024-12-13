import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    Content:string;
    tilte:string;
    id: string;
    author: {
        name:string
    }
}

export const useBlog = ({id}: {id:string}) => {
    const [blog , setBlog] = useState<Blog>()
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/${id}` , {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[id])

    return {blog , loading}
}

export const useBlogs = () => {
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState<Blog[]>([])
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk` , {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[])
    return {blogs , loading}
}