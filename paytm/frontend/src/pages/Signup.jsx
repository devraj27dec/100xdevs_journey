import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div className="h-screen bg-gray-300 flex mx-auto justify-center items-center">
      <div className=" border shadow-md rounded-md flex flex-col h-[500px] w-[400px] items-center bg-white p-6">
        <h2 className=" text-3xl font-bold mb-2">SignUp</h2>
        <p className="text-slate-400 mb-4">Enter your information two create an account</p>
        <form action="#" className=" flex flex-col w-full">
          <div className="flex flex-col p-2">
            <label htmlFor="" className="text-base font-semibold mb-1">Username</label>
            <input type="text" placeholder="Enter Username" className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"/>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="" className="text-base font-semibold mb-1">Email</label>
            <input type="text" placeholder="Enter Email" className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"/>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="" className="text-base font-semibold mb-1">Password</label>
            <input type="text" placeholder="Enter Password" className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"/>
          </div>
          <div>
            <button type="submit" className=" mt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login</button>
          </div>
        </form>
        <div className="py-2 text-sm flex justify-center">
          <div className="mr-1">
            Already have an account?
          </div>
          <Link to={'/signin'}>
            <div className="pointer underline pl-1 cursor-pointer">
              SignIn
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup