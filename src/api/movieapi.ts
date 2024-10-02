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

export async function getMoviesPopularHero(): Promise<Movie[]> {
  const url = `${BASE_URL}/trending/movie/week?language=en-US`;
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

const getDetailMovie = async (id: number): Promise<Movie> => {
  const url = `${BASE_URL}/movie/${id.toString()}?language=en-US`;
  try {
    const response = await axios.get(url, options);
    const setData: Movie = {
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

const getCreditMovie = async (id: number): Promise<CreditType[]> => {
  const url = `${BASE_URL}/movie/${id.toString()}/credits?language=en-US`;
  try {
    const response = await axios.get(url, options);
    const setData = response.data.cast.map((detail: CreditType) => ({
      name: detail.name,
      profile_path: `${IMAGE_BASE_URL}${detail.profile_path}`,
      character: detail.character,
    }));
    return setData.slice(0, 4);
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getTrailerMovie = async (id: number): Promise<VideoType[]> => {
  const url = `${BASE_URL}/movie/${id.toString()}/videos?language=en-US`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: VideoType) => ({
      name: data.name,
      key: data.key,
    }));
    return setData.slice(0, 6);
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getRecommendationsMovie = async (id: number): Promise<Movie[]> => {
  const url = `${BASE_URL}/movie/${id.toString()}/recommendations?language=en-US&page=1`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: Movie) => ({
      id: data.id,
      title: data.title,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    return setData;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

export const getDataDetailMovie = async (id: number) => {
  try {
    const detailMovie = await getDetailMovie(id);
    const creditMovie = await getCreditMovie(id);
    const trailerdetailMovie = await getTrailerMovie(id);
    const recommendationsMovie = await getRecommendationsMovie(id);

    return {
      detailMovie,
      creditMovie,
      trailerdetailMovie,
      recommendationsMovie,
    };
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getDetailTvSeries = async (id: number): Promise<TvSeriesType> => {
  const url = `${BASE_URL}/tv/${id.toString()}?language=en-US`;
  try {
    const response = await axios.get(url, options);
    const setData: TvSeriesType = {
      id: response.data.id,
      name: response.data.name,
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

const getCreditTvSeries = async (id: number): Promise<CreditType[]> => {
  const url = `${BASE_URL}/tv/${id.toString()}/credits?language=en-US`;
  try {
    const response = await axios.get(url, options);
    const setData = response.data.cast.map((detail: CreditType) => ({
      name: detail.name,
      profile_path: `${IMAGE_BASE_URL}${detail.profile_path}`,
      character: detail.character,
    }));
    return setData.slice(0, 4);
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getTrailerTvSeries = async (id: number): Promise<VideoType[]> => {
  const url = `${BASE_URL}/tv/${id.toString()}/videos?language=en-US`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: VideoType) => ({
      name: data.name,
      key: data.key,
    }));
    return setData.slice(0, 6);
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

const getRecommendationsTvSeries = async (
  id: number
): Promise<TvSeriesType[]> => {
  const url = `${BASE_URL}/tv/${id.toString()}/recommendations?language=en-US&page=1`;

  try {
    const response = await axios.get(url, options);
    const setData = response.data.results.map((data: TvSeriesType) => ({
      id: data.id,
      name: data.name,
      poster_path: `${IMAGE_BASE_URL}${data.poster_path}`,
    }));
    return setData;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
};

export const getDataDetailTvSeries = async (id: number) => {
  try {
    const detailTvSeries = await getDetailTvSeries(id);
    const creditTvSeries = await getCreditTvSeries(id);
    const trailerdetailTvSeries = await getTrailerTvSeries(id);
    const recommendationsTvSeries = await getRecommendationsTvSeries(id);

    return {
      detailTvSeries,
      creditTvSeries,
      trailerdetailTvSeries,
      recommendationsTvSeries,
    };
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw new Error("Failed to fetch movies");
  }
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
      totalPages: response.data.total_pages,
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
      totalPages: response.data.total_pages,
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

