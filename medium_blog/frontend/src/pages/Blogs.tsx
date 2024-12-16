import { BlogCard } from "../components/BlogCard";
import BlogSkeltons from "../components/BlogSkeltons";
import Header from "../components/Header";
import { Sidebar } from "../components/sidebar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { blogs, loading } = useBlogs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          {loading ? (
            <div className="flex flex-col gap-2">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <BlogSkeltons key={index} />
                ))}
            </div>
          ) : (
            <div>
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  authorName="Anonymous"
                  title={blog.title}
                  content={blog.Content}
                  publishedDate="2-Dec-2023"
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blogs;
