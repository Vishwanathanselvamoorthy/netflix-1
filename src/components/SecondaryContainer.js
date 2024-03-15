import React from "react";
import MovieList from "./MovieList";

import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className=" bg-[#141414] px-10 -mt-16 py-10">
      <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular On Netflix" movies={movies.popularMovies} />
      <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
