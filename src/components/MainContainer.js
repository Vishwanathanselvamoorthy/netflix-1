import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const singleMovieDetails = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  if (singleMovieDetails === null) return null;
  const movie = singleMovieDetails[6];
  const { overview, original_title, id, poster_path } = movie;
  return (
    <div>
      <VideoDetails
        description={overview}
        title={original_title}
        imgPath={poster_path}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
