import React, { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMoviesApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedMoviesApi();
  }, []);

  const fetchTopRatedMoviesApi = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMoviesApi;
