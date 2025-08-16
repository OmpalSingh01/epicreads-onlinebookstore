import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section bg-gray-100">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About <span className='text-pink-500'>Us</span></h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are passionate about creating meaningful solutions that help
              people and businesses grow. Our mission is to deliver quality,
              innovation, and trust in everything we do.
            </p>
          </div>
        </section>

        {/* Content Section */}
        {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-6">
            Epic Reads is more than just an online bookstore — it’s a community of readers,
            dreamers, and explorers. We handpick the best titles across genres, ensuring that
            every book you find here has the power to inspire and entertain.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you’re into timeless classics or the latest bestsellers, Epic Reads brings
            books closer to you with a smooth and premium shopping experience.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookshelf"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1528207776546-365bb710ee93"
            alt="Reading"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We believe that books can change lives. Our mission is to make reading
              accessible, enjoyable, and part of your everyday life. We work with authors,
              publishers, and book lovers to create a place where stories live forever.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default About;

