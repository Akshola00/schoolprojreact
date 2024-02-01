import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* left section of the footer */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: niit@gmail.com</p>
            <p> Phone: +23412234433</p>
            <p>Address: 3 Kanta Road</p>
          </div>

          {/* right section of footer */}
          <div>
            <h3 className="text-xl font-bold mb-4 ">Our Socials</h3>
            <div className=" flex justify-between ">            
            <a href="a" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="a" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="a" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="a" className="hover:text-gray-400">
              <FaYoutube />
            </a>
            </div>
            
              
            
          </div>
        </div>
      </div>
    </div>
  );
};
