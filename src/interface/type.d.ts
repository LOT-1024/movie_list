export interface Movie {
    id:number,
    title: string,
    overview: string,
    backdrop_path: string,
    poster_path:string,
    name:string
  }

  export type SliderProps = {
    fetchFunction: () => Promise<any>; // Adjust the return type if needed
    pageTitle: string
  };