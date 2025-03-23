import React from "react";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[375px] h-[812px] mx-auto bg-[#F7F8F9] px-6 py-10 shadow-md font-[Rubik] text-left">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-tight ">
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="text-[18px] font-normal text-[#919191] mt-3 mb-6">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="bg-[#F7F8F9]  flex items-center justify-center">
        <div className="space-y-6 w-full max-w-xs">
          {/* Email Field */}
          <div className="relative border border-gray-300 rounded-lg p-4 w-[335px] h-[40px]">
            <label className="absolute -top-[11px] left-4 bg-[#F7F8F9] text-[13px] text-[#6C25FF] px-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className=" bg-transparent focus:outline-none text-[#1D2226] placeholder-[#919191] text-[14px]"
            />
          </div>

          {/* Password Field */}
          <div className="relative border border-gray-300 rounded-lg p-4 w-[335px] h-[40px] ">
            <label className="absolute -top-[11px]  left-4 bg-[#F7F8F9] text-[13px] text-[#6C25FF] px-1 ">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className=" bg-transparent focus:outline-none text-[#1D2226] placeholder-[#919191] text-[14px]"
            />
          </div>
          <div className="w-[335px] h-[40px]">
            <button
              className=" py-2 bg-[#CBCBCB] text-[16px]   font-medium text-white rounded-md cursor-not-allowed w-full h-[46px]"
              onClick={navigate("/AS")}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Disabled Login Button */}
    </div>
  );
};

export default LoginScreen;
