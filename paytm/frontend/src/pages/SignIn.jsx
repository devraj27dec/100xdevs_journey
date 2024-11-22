import { Link } from "react-router-dom"


const SignIn = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <div className="border shadow-md flex flex-col h-[450px] w-[400px] items-center bg-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Log In</h2>
        <p className="text-slate-500 mb-4">Enter your credentials to access your account</p>
        <form className="flex flex-col w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-base font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="text-base font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
          >
            Log In
          </button>
        </form>
        <div className="py-2 text-sm flex justify-center">
          <div className="mr-1">Do not have an account?</div>
          <Link to="/signup" className="pointer underline pl-1 cursor-pointer">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
