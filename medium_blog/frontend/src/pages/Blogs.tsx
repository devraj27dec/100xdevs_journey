

import { BlogCard } from "../components/BlogCard"
import BlogSkeltons from "../components/BlogSkeltons"
import Header from "../components/Header"
import { useBlogs } from "../hooks"

export default function Blogs() {
  const {blogs , loading} = useBlogs()

  if(loading) {
    return (
      <div className="flex justify-center">
        <div>
          <BlogSkeltons/>
          <BlogSkeltons/>
          <BlogSkeltons/>
          <BlogSkeltons/>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Header/>
      <div className=" flex justify-center gap-4 mt-8">
      {blogs.map(blog => (
        <div key={blog.id}>
          <BlogCard
          id={blog.id}
          authorName={"Anyomnus"}
          title={blog.tilte}
          content={blog.Content}
          publishedDate={"2-Dec-2023"}
        />
        </div>
      )) }
    </div>
    </div>
  )
}