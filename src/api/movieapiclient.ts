import { Movie } from "@/interface/type";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Replace with your actual API key
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL;

export async function getFirstVideoMovie(id: number) {
  const url = `${BASE_URL}/movie/${id}/videos?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const resultVideo = await axios.get(url, options);
    const resultFirstVideo = {
      name: resultVideo.data.results[0].name,
      key: resultVideo.data.results[0].key,
    };
    return resultFirstVideo;
  } catch (err) {
    console.error("Error fetching movies: ", err);
    throw new Error("Failed to fetch movies");
  }
}

export async function getTopRatedMovies():Promise<Movie[]> {
  const url =
    `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };

  try {
    const result = axios.get(url, options);
    const selectNeededResult = (await result).data.results.map(
      (movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        poster_path: `${IMAGE_BASE_URL}${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getPopularMovies():Promise<Movie[]> {
  const url =
    `${BASE_URL}/movie/popular?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };

  try {
    const result = axios.get(url, options);
    const selectNeededResult = (await result).data.results.map(
      (movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        poster_path: `${IMAGE_BASE_URL}${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getTopRatedTvSeries():Promise<Movie[]> {
  const url = `${BASE_URL}/tv/top_rated?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };

  try {
    const result = axios.get(url, options);
    const selectNeededResult = (await result).data.results.map(
      (movie: Movie) => ({
        id: movie.id,
        title: movie.name,
        poster_path: `${IMAGE_BASE_URL}${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getPopularTvSeries():Promise<Movie[]> {
  const url = `${BASE_URL}/tv/popular?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };

  try {
    const result = axios.get(url, options);
    const selectNeededResult = (await result).data.results.map(
      (movie: Movie) => ({
        id: movie.id,
        title: movie.name,
        poster_path: `${IMAGE_BASE_URL}${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}
