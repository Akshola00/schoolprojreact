import React from "react";
import Hero from "../components/Hero";
export const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1>
          Welcome to the best school in{" "}
          <span className="text-blue-500">Africa</span>
        </h1>
        <p className="text-gray-700">Providing Quality Eduaction Since 1899</p>
      </div>
      {/* Image */}
      <img
        className="rounded-md shadow-lg mt-4 hover:scale-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQII5MjA5hrmqJZb-r6enNxH8is3HR3wg_Uog&usqp=CAU"
        alt="alt"
      />

      {/*  content  */}
      <div className="mt-8">
        <h2 className="text-2l font-bold mb-4">About Us</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tempora ea nesciunt nemo minima deserunt aliquam enim id excepturi et
          beatae sed, asperiores dignissimos error unde ad quasi eligendi dolor.
        </p>
      </div>

      {/* courses */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
            Courses
        </h2>
        <Hero />
        <p className="text-gray-700">Latest courses on cutting edge technology</p>
        <li>Blockchain</li>
        <li>Artificial Intelligence</li>
        <li>Big Data</li>
        <li>Data Analysis</li>
      </div>
    </div>
  );
};
