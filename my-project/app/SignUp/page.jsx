"use client"
import { useState, useEffect } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { redirect } from 'next/navigation';

export default function Signup() {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    phonenumber: "",
    fullname: "",
    password: "",
    createpassword: "",
    confirmpassword: "",
    gender: "",
    collegename: "",
    department: "",
    collegeaddress: "",
    yearofstudy: "",
  });

 

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    phonenumber: "",
    fullname: "",
    password: "",
    createpassword: "",
    confirmpassword: "",
    gender: "",
    collegename: "",
    department: "",
    collegeaddress: "",
    yearofstudy: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });

    setFormError({
      ...formError,
      [name]: "",
    });
  };


  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      username: "",
      email: "",
      phonenumber: "",
      fullname: "",
      password: "",
      createpassword: "",
      confirmpassword: "",
      gender: "",
      collegename: "",
      department: "",
      collegeaddress: "",
      yearofstudy: "",
    };

    if (!formInput.username) {
      inputError.username = "please enter Username";
    }

    if (!formInput.fullname) {
      inputError.fullname = "please enter Fullname";
    }
    if (!formInput.phonenumber) {
      inputError.phonenumber = "please enter Your Phone Number";
    }
    if (!formInput.email) {
      inputError.email = "please enter your Email";
    }
    if (!formInput.createpassword) {
      inputError.createpassword = "please enter Password";
    }

    if (!formInput.confirmpassword) {
      inputError.confirmpassword = "please enter Confirm Password";
    }
    if (formInput.createpassword.trim() !== formInput.confirmpassword.trim()) {
      inputError.confirmpassword =
        "Create Password and Confirm Password should be same";
    }
    if (!formInput.gender) {
      inputError.gender = "please choose your gender";
    }
    if (!formInput.collegename) {
      inputError.collegename = "please enter your College Name";
    }
    if (!formInput.department) {
      inputError.department = "please enter your department";
    }
    if (!formInput.collegeaddress) {
      inputError.collegeaddress = "please enter College Address";
    }
    if (!formInput.yearofstudy) {
      inputError.yearofstudy = "please enter Your Year of Study";
    }
    setFormError(inputError);
     const hasError = Object.values(inputError).some((msg) => msg !== "");
    if (!hasError) {
     alert("Form submitted Successfully Please Login...");
     redirect('/SignUp');
  }
    
  };

useEffect(() => {
  if (formInput) {
    localStorage.setItem("formInput", JSON.stringify(formInput));
  }
}, [formInput]);


  return (
    <div className="flex w-full">
      <div className="bg-[#041d42] text-white p-8 w-[85%]">
        <h2 className="text-[25px] max-md:text-[20px]">Welcome To </h2>
        <h2 className="text-[25px] font-bold max-md:text-[20px]">
          Renu Sharma Foundation !
        </h2>

        <form onSubmit={validateFormInput}>
          <div className="flex flex-col md:gap-4 sm:flex-col md:flex-row lg:flex-row">
            <div>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Username
                <input
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65 "
                  placeholder="Your username"
                  type="text"
                  name="username"
                  value={formInput.username}
                />
                <span className="text-red-600 text-sm">
                  {formError.username}
                </span>
              </label>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Email
                <input
                  value={formInput.email}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
                {formError.email && (
                  <span className="text-red-600 text-sm">
                    {formError.email}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Phone Number
                <input
                  value={formInput.phonenumber}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="tel"
                  name="phonenumber"
                  placeholder="Your Number"
                />
                <span className="text-red-600 text-sm">
                  {formError.phonenumber}
                </span>
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Fullname
                <input
                  value={formInput.fullname}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-102.5   max-sm:w-65"
                  type="text"
                  name="fullname"
                  placeholder="Your Full Name"
                />
                {formError && (
                  <span className="text-red-600 text-sm">
                    {formError.fullname}
                  </span>
                )}
              </label>{" "}
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Create Password
                <input
                  value={formInput.createpassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-102.5   max-sm:w-65"
                  type="password"
                  name="createpassword"
                  placeholder="***************"
                />
                <span className="text-red-600 text-sm">
                  {formError.createpassword}
                </span>
              </label>{" "}
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Confirm Password
                <input
                  value={formInput.confirmpassword}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-102.5   max-sm:w-65"
                  type="password"
                  name="confirmpassword"
                  placeholder="***************"
                />
                <span className="text-red-600 text-base">
                  {formError.confirmpassword}
                </span>
              </label>
            </div>
          </div>

          <p className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
            Gender
          </p>
          <div className="flex">
            <label className="flex items-center text-[12px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
              Male
              <input
                className="mx-4 appearance-none w-5 h-5 border-4 border-white rounded-full outline-none bg-white cursor-pointer checked:bg-[#41bdc5]"
                type="radio"
                name="gender"
                value="male"
                checked={formInput.gender === "male"}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
              />
            </label>
            <label className="flex items-center text-[12px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                className="mx-4 appearance-none w-5 h-5 border-4 border-white rounded-full outline-none bg-white cursor-pointer checked:bg-[#41bdc5]"
                checked={formInput.gender === "female"}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
              />
            </label>
          </div>
          <span className="text-red-600 text-sm">{formError.gender}</span>
          <div className="flex flex-col md:gap-4 sm:flex-col md:flex-row lg:flex-row">
            <div>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Name
                <input
                  value={formInput.collegename}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-72   max-sm:w-65"
                  type="text"
                  name="collegename"
                  placeholder="Your College Number"
                />
                <span className="text-red-600 text-sm">
                  {formError.collegename}
                </span>
              </label>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Department
                <div className="relative w-72 max-sm:w-65">
                  <select
                    name="department"
                    id="year"
                     value={formInput.department}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }} 
                    className="appearance-none text-sm flex items-center gap-22.5 max-sm:gap-15 border-2 border-white p-4 rounded-4xl w-72 max-sm:w-65"
                  >
                    <option value="">Choose your Department</option>
                    <option value="kjdkjfkla">Choose your Department</option>
                  </select>
                  <MdOutlineArrowDropDownCircle
                    size={25}
                    className="absolute right-2.25 top-4.75"
                  />
                  <span className="text-red-600 text-sm">
                    {formError.department}
                  </span>
                </div>
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                College Address
                <input
                  value={formInput.collegeaddress}
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                  className="border-2 border-white p-4 text-base rounded-4xl w-102.5   max-sm:w-65"
                  type="text"
                  name="collegeaddress"
                  placeholder="Your College Address"
                />
                <span className="text-red-600 text-sm">
                  {formError.collegename}
                </span>
              </label>

              <label className="flex flex-col gap-2 text-[14px] font-medium text-[#d9d9d9] max-md:text-base mt-3 mb-6 max-sm:mt-1.5 max-sm:mb-4.5">
                Year of Study
                <div className="relative w-72 max-sm:w-65">
                  <select
                    name="yearofstudy"
                    id="year"
                     value={formInput.yearofstudy}
                    onChange={({ target }) => {
                      handleUserInput(target.name, target.value);
                    }} 
                    className="appearance-none flex items-center gap-22.5 max-sm:gap-15 border-2 border-white p-4 text-base rounded-4xl w-72 max-sm:w-65"
                  >
                    <option value="">Enter Current Year </option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>{" "}
                  </select>
                  <MdOutlineArrowDropDownCircle
                    size={25}
                    className="absolute right-5.25 top-4.75"
                  />
                  <span className="text-red-600 text-sm">
                    {formError.yearofstudy}
                  </span>
                </div>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="border-2 border-white text-black bg-white w-125 h-21 rounded-[38px] text-[34px] font-bold mt-7 mb-18
              max-sm:w-72.5 max-sm:h-15 max-sm:text-[19px] max-sm:mt-4.25 max-sm:mb-9.25"
          />
          <br/>

          <a href="/Login" className="mb-40.25 text-[17px] text-[#e1e1e1] ml-6.25 max-w-[400px]:mb-[51px] max-w-[400px]:ml-0">
            {" "}
            Already have an account? <span className="text-[#41BDC5]">Sing in</span>
          </a>
        </form>
      </div>
      <div className="bg-[#41BDC5] w-[15%]"></div>
    </div>
  );
}
