
import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <section className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-12 my-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Your Journey to{" "}
          <span className="text-pink-500">Endless Stories</span>.
          <br /> Discover, Dream, and Dive into{" "}
          <span className="text-pink-500">Adventure!</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <strong>Epic Reads</strong>, your ultimate online
          bookstore where stories come alive and imagination knows no bounds.
          Dive into worlds unknown, find inspiration, and let every book open a
          new door to adventure. Whether you&apos;re here for knowledge, escape,
          or exploration, Epic Reads is your gateway to a universe of stories.
        </p>

        {/* Email Signup */}
        <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden border border-gray-200 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-5 py-3 outline-none text-gray-800"
          />
          <button className="bg-pink-500 text-white px-6 py-3 hover:bg-pink-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
        <img
          src={banner}
          alt="Epic Reads Banner"
          // className="rounded-xl shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Banner;



