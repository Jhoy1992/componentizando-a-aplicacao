import React from "react";
import { MoviesActions } from "./actions";
import { initialMovieState, MoviesState } from "./state";

export const MoviesContext = React.createContext<{
  state: MoviesState;
  dispatch: React.Dispatch<MoviesActions>;
}>({
  state: initialMovieState,
  dispatch: () => undefined,
});
