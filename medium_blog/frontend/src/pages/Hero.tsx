import { Link } from "react-router-dom";
import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import BlogSkeltons from "../components/BlogSkeltons";
import { useBlogs } from "../hooks";

export default function Hero() {

  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div className="flex justify-center gap-3">
        <BlogSkeltons />
        <BlogSkeltons />
        <BlogSkeltons />
        <BlogSkeltons />
      </div>
    );
  }

  return (
    <div className="w-full h-screen mx-auto bg-gray-50">
      <Header />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-12">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Write Your Blogs Here
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Reading and writing are essential parts of life. Spend at least 20
            minutes reading every day to improve your cognitive skills 🧠.
            Writing helps organize thoughts, improve memory, foster creativity,
            and promote effective communication.
          </p>
          <Link
            to="/publish"
            className="inline-block text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-xl font-bold transition duration-300"
          >
            Let's Get Started ✍️
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero2.jpg"
            alt="Blogging Inspiration"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className="bg-white py-12 px-6 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Recent Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex justify-center">
              <div className="w-full max-w-xs">
                {/* Fixed Width for BlogCard */}
                <BlogCard
                  id={blog.id}
                  authorName="Anonymous"
                  title={blog.title}
                  content={blog.Content}
                  publishedDate="2-Dec-2023"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
