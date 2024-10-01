interface Media {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

export interface Movie extends Media {
  title: string;
}

export interface TvSeriesType extends Media{
  name: string;
}

export interface CreditType {
  name: string;
  profile_path: string;
  character: string;
}

export type SliderProps = {
  fetchFunction: () => Promise<Movie[]> | Promise<TvSeriesType[]>; // Adjust the return type if needed
  pageTitle: string;
  link: string
};

export interface VideoType {
  name: string
  key: string
}