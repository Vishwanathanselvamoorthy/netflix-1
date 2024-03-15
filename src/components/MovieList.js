import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const MovieList = ({ title, movies }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl text-white mb-5 font-bold">{title}</h1>
      <div className="flex">
        <Swiper spaceBetween={30} slidesPerView={5}>
          {movies &&
            movies.map((movie) => (
              <SwiperSlide>
                <MovieCard moviePoster={movie.poster_path} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
