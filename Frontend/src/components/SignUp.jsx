

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    // await axios.post("http://localhost:4001/user/signup", userInfo)
    await axios.post("https://epicreads-b.onrender.com/user/signup", userInfo)

      .then((res) => {
        if (res.data) {
          toast.success('SignUp Successfully');
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9fb 0%, #e3e8ef 50%, #cfd8e3 100%)"
      }}
    >
      {/* Animated gradient blobs for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-lg relative z-10">
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-8 relative backdrop-blur-sm bg-opacity-90">
          
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          >
            ✕
          </Link>

          {/* Branding */}
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-4xl font-extrabold text-pink-500 tracking-wide">Epic Reads</h2>
            <p className="text-sm text-gray-500 mt-1">Where every story begins</p>
          </div>

          {/* Title */}
          <h3 className="font-bold text-2xl text-center text-gray-800 mb-4">
            Create Your Account
          </h3>
          <p className="text-center text-gray-500 mb-8">
            Join us today and start exploring!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="font-medium block mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-300"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  *This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-medium block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-300"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  *This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="font-medium block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-300"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  *This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold rounded-lg px-6 py-3 hover:bg-pink-700 duration-200 shadow-md"
            >
              Sign Up
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Login
            </span>
            <Login />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

