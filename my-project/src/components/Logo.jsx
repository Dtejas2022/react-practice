import React from 'react';
import { CiLogin } from "react-icons/ci";

export default function Logo() {
  return (
    <div>
      <div className="flex items-center px-6 py-2">
        <img src="logo.jpg" alt="Logo" className="h-[20vh] rounded-3xl shadow-lg" />
      </div>

      <div class="flex items-center">
        <a href="#login" class="bg-blue-500 text-black rounded-l-full px-4 py-2 hover:bg-violet-600 hover:text-white flex space-x-1 items-center font-bold"><CiLogin className='size-4'/>Log In</a>

        <a href="#signup" class="bg-green-500 text-white rounded-r-full px-4 py-2 hover:bg-green-600">Sign Up</a>
      </div>
    </div>
  )
}
