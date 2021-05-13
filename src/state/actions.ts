export enum ActionType {
  SetGenreSelected,
}

export interface SetGenreSelected {
  type: ActionType.SetGenreSelected;
  payload: { id: number; title: string };
}

export type MoviesActions = SetGenreSelected;
