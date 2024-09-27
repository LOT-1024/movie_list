import { Movie } from "@/interface/type";
import axios from "axios";

const API_KEY = process.env.NEXT_API_KEY; // Replace with your actual API key
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_BASE_URL = process.env.NEXT_API_IMAGE_BASE_URL;

export async function getMoviesPopularHero(): Promise<Movie[]> {
  const url = `${BASE_URL}/trending/movie/week?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${API_KEY}`,
    },
  };
  try {
    const responseMovie = await axios.get(url, options);
    const selectedMovieData = responseMovie.data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      backdrop_path: `${IMAGE_BASE_URL}/${movie.backdrop_path}`,
      poster_path: `${IMAGE_BASE_URL}/${movie.poster_path}`,
    }));
    return selectedMovieData.slice(0, 5);
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getTopRatedMovies() {
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
        poster_path: `${IMAGE_BASE_URL}/${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getPopularMovies() {
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
        poster_path: `${IMAGE_BASE_URL}/${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getTopRatedTvSeries() {
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
        poster_path: `${IMAGE_BASE_URL}/${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

export async function getPopularTvSeries() {
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
        poster_path: `${IMAGE_BASE_URL}/${movie.poster_path}`,
      })
    );
    return selectNeededResult;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}
