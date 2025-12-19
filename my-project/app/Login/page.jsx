"use client";

import { useState } from 'react';
import logo from '../assets/renusharma-logo.png';
import hexagons from '../assets/hexagon.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Image from "next/image";
import { useForm } from "react-hook-form";
import { redirect } from 'next/navigation';

export default function Login() {

 const [showPassword, setShowPassword] = useState(false);
 const [loginError, setLoginError] = useState("");

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

 const onSubmit = (data) => {
  const saved = localStorage.getItem("formInput");
  if (!saved) {
    setLoginError("No user found. Please sign up first.");
    return;
  }

  const formInput = JSON.parse(saved); 

  const savedEmail = formInput.email;
  const savedPassword = formInput.confirmpassword; 
  if (data.email === savedEmail && data.password === savedPassword) {
    setLoginError("");
    alert("Successfully Login...");
    redirect("/Dashboard");   
  } else {
    setLoginError("Invalid email or password.");
  }
};


  return (
    <div className="h-full md:h-screen w-full overflow-hidden flex flex-col md:flex-row items-start">
      <div className="w-full  md:w-1/2 h-screen bg-[#faf6f6] flex flex-col  items-center   p-6 rounded-bl-2xl rounded-br-2xl">
        <div className="w-full flex justify-center md:flex-row">
          <Image src={logo} alt="Logo" className="h-40 w-full md:h-80" /> Replace with your logo path
        </div>
        <h2 className="text-[25px] text-black max-md:text-[20px]">Welcome To </h2>
        <h2 className="text-[25px] text-black font-bold mb-4 max-md:text-[20px]">Log In Page        </h2>
      
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:ml-20 space-y-6">
          <div>
            <label className="block text-sm mb-1 text-gray-700 font-bold">Email</label>
            <input
            {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="text-black w-full md:w-[90%] lg:w-[80%] h-12 px-4 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
            {errors.email && <span>This field is required</span>}

          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 font-bold">Password</label>
            <input
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="text-black w-full md:w-[90%] lg:w-[80%] h-12 px-4 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-600 hover:text-gray-800 absolute ml-[-5vh] mt-3"
            >

              {showPassword ? (
                <FiEyeOff className="w-5 h-5 cursor-pointer" />
              ) : (
                <FiEye className="w-5 h-5 cursor-pointer" />
              )}
            </button>
             {errors.password && <span>This field is required</span>}

          </div>

          <div className="flex font-bold  justify-between items-center text-[12px] md:text-sm text-gray-600 w-[80%] md:w-[90%] lg:w-[80%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer mr-2 h-4 w-4 rounded-sm"
              />
              Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline cursor-pointer font-medium">
              Forgot your password?
            </button>
             
          </div>

          <button
            type="submit"
            className="w-full md:w-[90%] lg:w-[80%] h-12 bg-[#121c37] text-white rounded-full cursor-pointer hover:bg-[#202d4e] transition"
          >
            Login
          </button>

          <div className="text-center text-black mr-16 lg:mr-[12vh] items-center font-bold text-[12px] md:text-sm mt-2 ">
            `Do not have an account?{' '}`
            <button
              type="button"
              onClick={() => {
                redirect('/SignUp');
              }}
              className="text-blue-600 cursor-pointer font-medium hover:underline"
            >
              Create one
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2 h-screen bg-gray-100 hidden md:block rounded-br-2xl overflow-hidden rounded-tr-2xl">
        <div className="flex flex-col  h-full relative md:-ml-1 lg:-ml-6.25 ">
             <Image
            src={hexagons}
            alt="hexagons"
            className='w-full absolute md:left-8 lg:left-14 h-[95%] lg:h-[99%]' />
        </div>
      </div>
    </div>
  );
};

