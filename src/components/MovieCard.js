import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
  return (
    <div>
      <img
        className="w-80 h-40 rounded-lg"
        src={IMG_CDN + moviePoster}
        alt="movie-poster"
      />
    </div>
  );
};

export default MovieCard;
