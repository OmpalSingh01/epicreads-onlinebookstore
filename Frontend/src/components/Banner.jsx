
import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {

  // Function to scroll a little down
  const scrollDown = () => {
    window.scrollBy({
      top: 700,   // Adjust this value to scroll more or less
      left: 0,
      behavior: 'smooth'
    });
  };

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

        {/* Browse Collections Button */}
        <button
          onClick={scrollDown}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transform transition-all"
        >
          Browse Collections
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
        <img
          src={banner}
          alt="Epic Reads Banner"
          className="rounded-xl  max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Banner;
