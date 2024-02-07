import React from "react";
import { GallerySection } from "../components/GallerySection";
export const About = () => {
  return (
    <div className="container mx-auto mt-4">
      <h2 className="font-bold text-2xl text-gray-400 m-4">About Us :</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div>
            <img
              src="https://via.placeholder.com/600x600"
              alt="About"
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            labore, deleniti consectetur, aliquam at voluptates nesciunt eius
            placeat consequatur accusantium expedita magnam rem repudiandae
            architecto fuga hic natus dolor sapiente?
          </p>
        </div>

        <div>
          <div>
            <img
              src="https://via.placeholder.com/600x600"
              alt="About"
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            labore, deleniti consectetur, aliquam at voluptates nesciunt eius
            placeat consequatur accusantium expedita magnam rem repudiandae
            architecto fuga hic natus dolor sapiente?
          </p>
        </div>
      </div>
      <GallerySection />
    </div>
  );
};
