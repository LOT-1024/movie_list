import { CreditType, Movie, VideoType } from "@/interface/type";
import axios from "axios";

const API_KEY = process.env.NEXT_API_KEY; // Replace with your actual API key
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_API_IMAGE_BASE_URL;

export async function getMoviesPopularHero(): Promise<Movie[]> {
  const url = `${BASE_URL}/trending/movie/week?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const responseMovie = await axios.get(url, options);
    const selectedMovieData = responseMovie.data.results.map(
      (movie: Movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
        poster_path: `${IMAGE_BASE_URL}${movie.poster_path}`,
      })
    );
    return selectedMovieData.slice(0, 5);
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
}

const getDetailMovie = async (id: number) => {
  const url = `${BASE_URL}/movie/${id.toString()}?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await axios.get(url, options);
    const setData = {
      id: response.data.id,
      title: response.data.title,
      overview: response.data.overview,
      backdrop_path: `${IMAGE_BASE_URL}${response.data.backdrop_path}`,
      poster_path: `${IMAGE_BASE_URL}${response.data.poster_path}`,
    };
    return setData;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getCreditMovie = async (id: number) => {
  const url = `${BASE_URL}/movie/${id.toString()}/credits?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  try {
    const response = await axios.get(url, options)
    const setData =  response.data.cast.map((detail:CreditType) => (
      {
        name: detail.name,
        profile_path: `${IMAGE_BASE_URL}${detail.profile_path}`,
        character: detail.character
      }
    ))
    return setData.slice(0,4)
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getTrailerMovie = async (id:number) => {
  const url = `${BASE_URL}/movie/${id.toString()}/videos?language=en-US`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await axios.get(url, options) 
    const setData = response.data.results.map((data:VideoType) => ({
      name: data.name,
      key: data.key
    }))
    return setData.slice(0,6)
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
}

const getRecommendationsMovie = async (id:number) => {
  const url = `${BASE_URL}/movie/${id.toString()}/recommendations?language=en-US&page=1`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await axios.get(url,options)
    const setData = response.data.results.map((data:Movie) => ({
      id: data.id,
      title: data.title,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`
    }))
    return setData
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
}

export const getDataDetailMovie = async (id:number) => {
  try {
    const detailMovie = await getDetailMovie(id)
    const creditMovie = await getCreditMovie(id)
    const trailerdetailMovie = await getTrailerMovie(id)
    const recommendationsMovie = await getRecommendationsMovie(id)

    return {detailMovie, creditMovie, trailerdetailMovie, recommendationsMovie}
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
}