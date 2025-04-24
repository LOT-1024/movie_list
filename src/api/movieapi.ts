import { CreditType, Movie, TvSeriesType, VideoType } from "@/interface/type";
import axios from "axios";

const API_KEY = process.env.NEXT_API_KEY; // Replace with your actual API key
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL;
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getDiscoverTvSeries = async (page:number): Promise<{
  tvseries: TvSeriesType[];
  totalPages: number;
}> => {
  const url = `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: TvSeriesType) => ({
      id: data.id,
      name: data.name,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    const total = {
      tvseries: setData,
      totalPages: 500,
    };
    return total;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

export const getDiscoverMovies = async (page:number): Promise<{
  movies: Movie[];
  totalPages: number;
}> => {
  const url = `${BASE_URL}/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: Movie) => ({
      id: data.id,
      title: data.title,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    const total = {
      movies: setData,
      totalPages: 500,
    };
    return total;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

export const searchMovies = async (query:string,page:number): Promise<{
  movies: Movie[];
  totalPages: number;
}> => {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: Movie) => ({
      id: data.id,
      title: data.title,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    const total = {
      movies: setData,
      totalPages: response.data.total_pages,
    };
    return total;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

export const searchTvSeries = async (query:string,page:number): Promise<{
  tvseries: TvSeriesType[];
  totalPages: number;
}> => {
  const url = `${BASE_URL}/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: TvSeriesType) => ({
      id: data.id,
      name: data.name,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    const total = {
      tvseries: setData,
      totalPages: response.data.total_pages,
    };
    return total;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

