import React from "react";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl px-16 py-20 flex flex-col items-center space-y-10">
        <h1 className="text-5xl font-extrabold text-indigo-700">Welcome 👋</h1>
        <p className="text-gray-600 text-lg text-center max-w-md">
          Please choose an option to continue into your dashboard.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <button  onClick={()=>{navigate("/login")}}
          className="w-full bg-white border border-indigo-600 hover:bg-indigo-50 text-indigo-700 text-lg font-semibold py-4 rounded-xl shadow-sm transition duration-300">
            Login
          </button>
          <button onClick={()=>{navigate("/signup")}}
          className="w-full bg-white border border-indigo-600 hover:bg-indigo-50 text-indigo-700 text-lg font-semibold py-4 rounded-xl shadow-sm transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
