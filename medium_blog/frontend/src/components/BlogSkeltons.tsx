export default function BlogSkeltons() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-400 rounded-full"></div>
          <div className="ml-2 w-24 h-4 bg-gray-200 dark:bg-gray-400 rounded"></div>
        </div>
        <div className="h-6 bg-gray-200 dark:bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-400 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-400 rounded w-2/3"></div>
        <div className="mt-4 flex justify-between items-center">
          <div className="w-32 h-4 bg-gray-200 dark:bg-gray-400 rounded"></div>
          <div className="w-16 h-5 bg-gray-200 dark:bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
