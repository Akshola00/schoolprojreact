import React from "react";

export const GallerySection = () => {
  // array of placeholder images
  const images = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100"
  ];
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Image Splash</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* map through our images array */}
        {images.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-full overflow-hidden">
            <img src={image} className="w-full h-auto" alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};
