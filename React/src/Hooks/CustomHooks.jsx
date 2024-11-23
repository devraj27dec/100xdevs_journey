// Data fetching hooks

import { useState, useEffect } from 'react'
import axios from 'axios'

export const useTodo = (n) => {

    const [loading , setLoading] = useState(true)
    const[todos , setTodos] = useState([])

    function getData() {
        axios.get('http://localhost:3000/todos')
        .then((res) => {
            console.log(res.data)
            setTodos(res.data.todos)
        })
        
        setLoading(false)
    }
    useEffect(() => {
        const value  = setInterval(() => {
            getData()
        } , n * 1000)
        return () => (
            clearInterval(value)
        )
    },[n])
    return {todos , loading:loading}
}

