const Send = () => {
  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-4 w-96 bg-white shadow-md rounded-lg">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Send Money</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">A</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Friend</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="text-sm font-medium text-gray-600 leading-none"
              >
                Amount (in Rs)
              </label>
              <input
                type="text"
                id="amount"
                placeholder="Enter Amount"
                className="border w-full p-2 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="w-full p-2 bg-green-600 text-white font-medium rounded-md transition-colors hover:bg-green-700">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
