import React from 'react';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {

  const navigate = useNavigate();
  return (
    <div className="flex items-end justify-center min-h-screen bg-[#F7F8F9] px-4 border border-gray-300 font-[Rubik]">
      <div className="w-[375px] text-left pb-10">
        <h1 className="text-xl font-semibold text-[#1D2226] mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="space-y-3">
          <button className="w-full bg-[#6C25FF] text-white py-3 rounded-md font-medium" onClick={()=> navigate("createA")}>
            Create Account
          </button>
          <button className="w-full bg-purple-200  py-3 rounded-md font-medium border border-[#CBCBCB]" onClick={()=> navigate("login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
