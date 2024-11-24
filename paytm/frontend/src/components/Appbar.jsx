import { Link } from "react-router-dom";

const Appbar = () => {
    return (
      <div className="shadow-md h-14 flex justify-between items-center px-4 ">
        <div className="text-lg font-semibold">
          PayTM
        </div>
        <div className="flex items-center">
          <div className="bg-[rgb(0,186,242)] flex items-center text-white py-1 px-3 rounded-full space-x-2 cursor-pointer">
           <Link to={'/signup'}>
            <span className=" text-sm font-medium">Sign In</span>
              <div className="w-10 h-10 rounded-full flex border justify-center items-center">
                <img
                src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"
                alt="profile_logo"
                className="w-6 h-6"
                />
              </div>
           </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Appbar;
  