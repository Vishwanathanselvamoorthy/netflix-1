import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrailerVideoApi();
  }, []);

  const fetchTrailerVideoApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );

    const trailer = filterTrailer ? filterTrailer[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
};
export default useTrailerVideo;
