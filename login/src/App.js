export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* left side of page */}
      <div className="bg-blue-700 w-[41%] flex justify-center items-center">
        <img className="w-[15%] h-[15%] p-[2vh]" src="logoelection.png" alt="logo for election commision"/>
        <p className="text-white font-bold text-lg">भारत निर्वाचन आयोग<br></br>
        Election Commission of India</p>
      </div>

      {/* right side of page */}

      {/* <div className="w-[59%] flex justify-center items-center border-">
        <div className="">
          <p className="font-bold">Login</p>
        </div>
      </div> */}

        <div className="w-[59%] flex items-center justify-center h-screen p-4">
            <form className="p-4 bg-gray-300 shadow-md rounded">
                <h2 className="text-lg font-bold">Login</h2>
                <h2 className="mb-4">Do not have a account?<a href="#" className="text-blue-600 hover:text-red-500">Sign-Up</a></h2>
                <div className="mb-4">
                    <label for="username" className="block text-gray-700 text-sm font-bold mb-2">Registered Mobile No./Email ID/EPIC No.</label>
                    <input type="text" placeholder="Enter registerd Mobile No./Email ID/EPIC No. " id="username" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input type="password" placeholder="Enter Password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Request OTP</button>
                </div>
            </form>
        </div>
  
    </div>
    
  )
}