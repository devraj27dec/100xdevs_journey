import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { Blog } from "../types";

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

    const token = localStorage.getItem("token")
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk` , {
            headers: {
                Authorization: token
            }
        }).then(res => {
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[token])
    return {blogs , loading}
}

