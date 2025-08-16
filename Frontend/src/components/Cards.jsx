

import React from "react";

function Cards({ item }) {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_R5KnFCGv0PCocs", // Replace with your Razorpay Key ID
      amount: item.price * 100, // Price in paise
      currency: "INR",
      name: "Epic Reads",
      description: `Purchase of ${item.name}`,
      // image: "https://yourlogo.com/logo.png", // Optional: your logo URL
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#F472B6", // Keeps the pink theme
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-[1.02] duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
          <img
            src={item.image}
            alt="book background"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30"
          />
          <img
            src={item.image}
            alt="book"
            className="relative z-10 max-h-full max-w-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 2H10C7.243 2 5 4.243 5 7v13c0 1.654 1.346 3 3 3h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H8c-.551 0-1-.449-1-1V7c0-1.103.897-2 2-2h9v15Z"/>
              </svg>
              {item.name}
            </span>
            <span className="badge badge-secondary">{item.category}</span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 min-h-[60px]">
            {item.title}
          </p>

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-4">
            <span className="flex items-center gap-1 text-pink-500 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.59 13.41 11 3.83V2H2v9h1.83l9.58 9.59a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83ZM4 9V4h5v5H4Zm14.17 7.59-4.35 4.35-9.17-9.17V6h5.17l9.17 9.17-1.82 1.82Z"/>
              </svg>
              ₹{item.price}
            </span>

            <button
              onClick={handlePayment}
              className="px-4 py-1 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;



            

