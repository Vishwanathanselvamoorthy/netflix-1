import React, { useEffect } from "react";
import { API_OPTIONS, UPCOMING_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMoviesApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUpcomingMoviesApi();
  }, []);

  const fetchUpcomingMoviesApi = async () => {
    const data = await fetch(UPCOMING_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMoviesApi;
