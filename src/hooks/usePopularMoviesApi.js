import { useEffect } from "react";
import { API_OPTIONS, POPULAR_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMoviesApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMoviesApi();
  }, []);

  const fetchPopularMoviesApi = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMoviesApi;
