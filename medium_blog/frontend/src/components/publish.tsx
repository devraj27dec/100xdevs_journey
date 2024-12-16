import { useState } from "react"
import Header from "./Header"
import TextareaAutosizeProps from 'react-textarea-autosize'
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

const Publish = () => {
  const navigate = useNavigate()

  const [title , setTitle] = useState("")
  const [Content , setContent] = useState("")
  
  const handlePublish = async() => {
    await axios.post(`${BACKEND_URL}/blog/new` , {
      title,
      Content
    } , {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    navigate('/')
  }
  

  return (
    <div className=" min-h-screen">
      <Header handlepublish={handlePublish}/>
      <div className="max-w-4xl flex flex-col justify-center mx-auto mt-8">
        <div className="m-2">
        <TextareaAutosizeProps onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full outline-transparent text-4xl border-none"/>
        </div>
        <div className="m-2">
        <TextareaAutosizeProps onChange={(e) => setContent(e.target.value)} placeholder="Tell your story" className="w-full outline-transparent text-xl border-none"/>
        </div>
      </div>
    </div>
  )
}

export default Publish