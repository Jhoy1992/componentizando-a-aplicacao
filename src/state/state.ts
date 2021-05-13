export interface MoviesState {
  selectedGenre: {
    id: number;
    title: string;
  };
}

export const initialMovieState: MoviesState = {
  selectedGenre: {
    id: 1,
    title: "",
  },
};
