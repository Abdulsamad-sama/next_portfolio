import React from "react";

// Add this below the component
// Tailwind CSS animation for text color fill effect

// Update the component to include the animation:

const Loading = () => {
  return (
    <div className=" h-120 flex justify-center items-center pointer-events-none z-50">
      <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-move">
        Abdulsamad
      </h1>
    </div>
  );
};

export default Loading;
