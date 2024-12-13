import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <article className="max-w-md mx-auto bg-white dark:bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Avatar name={authorName} size="small" />
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {authorName}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
            {content}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={publishedDate}>
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-300">
              Blog
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}



export function Avatar ({name , size="small"}: {name:string , size?: "small" | "big"}) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-400 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-800 dark:text-gray-300`}>
        {name[0]}
    </span>
    </div>
  )
}
