import React from "react";

const VideoTitle = ({ title, type }) => {
  return (
    <div className=" w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h2 className="py-6 text-3xl font-serif">{type}</h2>
      <div className="flex ">
        <button className="bg-gray-700 p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className=" mx-2 bg-gray-700 p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
