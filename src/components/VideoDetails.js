import React from "react";
import { IMG_CDN } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoDetails = ({ description, title, imgPath }) => {
  return (
    <div className="absolute my-[25vh] px-16">
      <img
        className="w-36 rounded-full h-36"
        src={IMG_CDN + imgPath}
        alt="poster-img"
      />
      <h1 className="text-5xl text-white font-bold my-4 ">{title}</h1>
      <p className="w-6/12 font-semibold text-white text-lg my-6">
        {description}
      </p>
      <div className="flex gap-5">
        <button className="bg-white px-8 py-3 font-semibold text-black text-xl rounded-lg">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Play
        </button>
        <button className="bg-gray-500/70 px-8 py-3 font-semibold text-white text-xl rounded-lg">
          <FontAwesomeIcon className="mr-2" icon={faCircleInfo} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
