import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [isAgency, setIsAgency] = useState("yes");
  const navigate = useNavigate();
  const [name, setName] = useState("Marry Doe");
  const [email, setEmail] = useState("marry@example.com");

  const InputField = ({ label, required, type = "text", placeholder, value, onChange }) => (
    <div className="relative border border-gray-300 rounded-lg p-3 w-[335px] h-[56px] bg-white">
      <label className="absolute -top-[10px] left-3 bg-white text-[13px] text-[#6C25FF] px-1 leading-[17px]">
        {label}
        {required && <span className="text-[#DD4A3D]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[335px] h-[40px] bg-transparent focus:outline-none text-black placeholder-gray text-[14px] mt-1"
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Name:", name);
    console.log("Email:", email);
    navigate("AS"); // Navigate to Account Setting
  };

  return (
    <div className="w-[375px] min-h-[812px] mx-auto bg-white px-5 py-6 font-['Rubik'] text-left">
      <h1 className="text-[28px] font-medium text-[#1D2226] leading-[36px] mb-8">
        Create your <br />
        PopX account
      </h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          required
          placeholder="Marry Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField label="Phone number" required placeholder="9876543210" />
        <InputField
          label="Email address"
          required
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          required
          type="password"
          placeholder="********"
        />
        <InputField label="Company name" placeholder="Your Company" />

        {/* Are you an Agency? */}
        <div>
          <p className="text-[13px] text-[#6C25FF] leading-[17px] mb-2">
            Are you an Agency?<span className="text-[#DD4A3D]">*</span>
          </p>
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 text-[14px] text-[#1D2226]">
              <input
                type="radio"
                value="yes"
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
                className="accent-[#6C25FF]"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-[14px] text-[#1D2226]">
              <input
                type="radio"
                value="no"
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-[335px] h-[46px] mt-6 bg-[#6C25FF] text-white text-[16px] font-medium py-3 rounded-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
