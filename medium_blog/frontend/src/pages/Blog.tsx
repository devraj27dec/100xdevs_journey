import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"



export default function Blog() {
  const {id} = useParams()
  const {blog , loading} = useBlog({
    id: id || ""
  })

  if (loading || !blog) {
    return <div>
      <div className="h-screen flex flex-col justify-center"> 
        <div className="flex justify-center">
          Loading...
        </div>
      </div>
    </div>
}
  
  return (
    <div>
      <h2>Blog details</h2>
      <FullBlog blog={blog}/>
    </div>
  )
}