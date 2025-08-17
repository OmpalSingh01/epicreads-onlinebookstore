

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // await axios.post("http://localhost:4001/user/login", userInfo)
    await axios.post("https://epicreads-b.onrender.com/user/login", userInfo)

      .then((res) => {
        if (res.data) {
          toast.success('Login Successfully');
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            window.location.reload();
          }, 500);
        }
      }).catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-xl shadow-xl p-6">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-5">
            
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            {/* Title */}
            <h3 className="font-bold text-2xl text-gray-800">Login</h3>
            <p className="text-gray-500 text-sm">Welcome back! Please enter your details.</p>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-300 transition"
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
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-300 transition"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  *This field is required
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-lg px-5 py-2 hover:bg-pink-700 duration-200 shadow-sm"
              >
                Login
              </button>
              <p className="text-sm text-gray-600">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
