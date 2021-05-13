import { ActionType, MoviesActions, SetGenreSelected } from "./actions";
import { MoviesState } from "./state";

export function moviesReducer(
  state: MoviesState,
  action: MoviesActions
): MoviesState {
  switch (action.type) {
    case ActionType.SetGenreSelected:
      return { ...state, selectedGenre: action.payload };

    default:
      return state;
  }
}

export const setGenreSelected = (
  id: number,
  title: string
): SetGenreSelected => ({
  type: ActionType.SetGenreSelected,
  payload: { id, title },
});
