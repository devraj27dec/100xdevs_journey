import { Link, useLocation} from "react-router-dom"

type HeaderProps = {
  handlepublish: () => void
}


export default function Header({handlepublish}: HeaderProps) {

  const location = useLocation()

  const isOnPublishPage = location.pathname === '/publish'
  
  return (
    <header className="border shadow-md bg-white">
      <div className="container mx-auto p-3 flex items-center justify-between">
        <Link to={'/'} className="text-xl font-extrabold">Medium</Link>
        <div className=" flex items-center space-x-4">
        {isOnPublishPage && (
            <button 
              onClick={handlepublish}
              className="p-2 bg-sky-500 text-white rounded-full px-4 py-2 hover:bg-sky-600 transition">
                publish
            </button>
          )}
            <Link to={'/signup'}>
              <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 transition">Signup</button>
            </Link>
        </div>
      </div>
    </header>
  )
}