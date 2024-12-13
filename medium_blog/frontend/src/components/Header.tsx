import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex justify-between border p-2 shadow-md">
        <div className="text-xl font-extrabold">Medium</div>
        <div className=" flex p-2 gap-x-2">
            <Link to={'/blogs'}>
              <button>Blogs</button>
            </Link>
            <Link to={'/signup'}>
              <button>Signup</button>
            </Link>
        </div>
    </div>
  )
}