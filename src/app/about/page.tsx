
"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">WHO WE ARE</h1>
      <h2 className="text-xl font-semibold mb-4">About Us E-commerce Mart</h2>

      <div className="max-w-3xl text-gray-700 space-y-4">
        <p>
          Welcome to our E-commerce Mart, <strong>www.ecommercemart.com</strong> where  meets freshness. 
          We serve delicious best products with love, using the finest ingredients. 
          From hearty commit to gourmet time, every bite tells a story.
        </p>

        <p>
          Currently, we are operating over <strong>37 E-commerce Mart outlets</strong> in major cities like Dhaka, 
          Chittagong, and Sylhet of Bangladesh. We also export products and rusks to Europe, USA, 
          Middle East, and some Asian Countries.
        </p>

        <p>
          Diversity and equity are at the heart of our values and growth strategy. 
          We focus on creating a healthy work environment.
        </p>

        <h3 className="text-lg font-bold mt-6">Our Mission</h3>
        <p>
          Our mission is to provide global quality product in a hospitable environment. 
          Entertaining our customers in a friendly atmosphere with efficient service is the key to success.
        </p>

        <h3 className="text-lg font-bold mt-6">Our Vision</h3>
        <p>
          Our goal is to become the number one E-commerce Mart company in Bangladesh and lead in this sector.
        </p>

        <h3 className="text-lg font-bold mt-6">Our Commitment</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Quality</li>
          <li>Job Satisfaction</li>
          <li>Productivity</li>
          <li>Continuous Improvement</li>
          <li>Growth and Prosperity</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

