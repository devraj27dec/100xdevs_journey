import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="shadow-md h-14 flex justify-between items-center px-4 bg-white">
      <div className="text-lg font-semibold text-gray-800">
        PayTM
      </div>
      <div className="flex items-center">
        <Link to="/signup" className="flex items-center space-x-2 bg-[rgb(0,186,242)] text-white py-1 px-3 rounded-full cursor-pointer hover:bg-[rgb(0,160,210)] transition-all duration-200">
          <span className="text-sm font-medium">Sign In</span>
          <div className="w-8 h-8 rounded-full flex border border-white justify-center items-center">
            <img
              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"
              alt="profile_logo"
              className="w-5 h-5"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
