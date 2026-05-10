"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center mt-3 bg-gray-50 p-2 md:p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Contact Us</h1>

      {/* Contact Info */}
      <div className=" dark:bg-gray-900 dark:text-white bg-white shadow-md rounded-lg text-gray-600 p-6 w-full max-w-md">
        <p className="mb-2">
          <strong>Email:</strong> contact@ecommercemart.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +1 (666) 000-0000
        </p>
        <p className="mb-2">
          <strong>Company:</strong> E-commerce Mart
        </p>
        <p className="mb-6">
          <strong>Address:</strong> 41/2 Niketon Garden, Gulshan, Dhaka
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Subject"
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="First name"
            className="border rounded p-2"
          />
          <input
            type="email"
            placeholder="you@company.com"
            className="border rounded p-2"
          />
          <input
            type="tel"
            placeholder="US +1 (666) 000-0000"
            className="border rounded p-2"
          />
          <textarea
            placeholder="Leave us a message..."
            className="border rounded p-2 h-24"
          ></textarea>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> I agree to the friendly privacy policy.
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;


