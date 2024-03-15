import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMoviesApi from "../hooks/useNowPlayingMoviesApi";
import usePopularMoviesApi from "../hooks/usePopularMoviesApi";
import useTopRatedMoviesApi from "../hooks/useTopRatedMoviesApi";
import useUpcomingMoviesApi from "../hooks/useUpcomingMoviesApi";

const Browse = () => {
  useNowPlayingMoviesApi();
  usePopularMoviesApi();
  useTopRatedMoviesApi();
  useUpcomingMoviesApi()
  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
