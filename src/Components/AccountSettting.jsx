import React from "react";
import { FaCamera } from "react-icons/fa";

const AccountSetting = () => {
  return (
    <div className="w-[375px] min-h-[812px] mx-auto  font-['Rubik'] text-[#1D2226]  border border-[#E5E5E5] bg-white text-left">
      {/* Title */}
      <h2 className="text-[18px] font-medium mb-4 leading-[21px] bg-white p-4">
        Account Settings
      </h2>

      {/* Profile section */}
      <div className=" bg-[#F7F8F9] p-4 h-full">
        <div >
          <div className="flex items-start gap-4 pb-4  ">
            <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg" // Replace with your actual image if needed
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full">
                <FaCamera className="text-white text-[12px]" />
              </div>
            </div>

            <div>
              <h3 className="text-[15px] font-medium leading-[19px]">
                Marry Doe
              </h3>
              <p className="text-[14px] leading-[19px]">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] mt-4 leading-[22px]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="border-b border-t border-dashed border-[#726f6f] mt-2.5 h-[500px]"></div>
      </div>
    </div>
  );
};

export default AccountSetting;
