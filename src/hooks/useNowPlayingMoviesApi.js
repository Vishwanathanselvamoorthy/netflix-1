import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMoviesApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMoviesApi();
  }, []);
  const fetchNowPlayingMoviesApi = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json?.results));
  };
};
export default useNowPlayingMoviesApi;
