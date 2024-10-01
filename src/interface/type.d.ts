export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

export interface CreditType {
  name: string;
  profile_path: string;
  character: string;
}

export type SliderProps = {
  fetchFunction: () => Promise<Movie[]>; // Adjust the return type if needed
  pageTitle: string;
};

export interface VideoType {
  name: string
  key: string
}