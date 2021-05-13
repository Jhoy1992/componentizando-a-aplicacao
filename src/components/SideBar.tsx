import { useContext, useState, useEffect } from "react";
import { api } from "../services/api";

import { MoviesContext } from "../state/context";
import { setGenreSelected } from "../state/reducer";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const { state, dispatch } = useContext(MoviesContext);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    const genreSelected = genres.find(
      genre => genre.id === state.selectedGenre.id
    );

    if (genreSelected) {
      dispatch(setGenreSelected(state.selectedGenre.id, genreSelected.title));
    }
  }, [genres]);

  function handleClickButton({ id, title }: GenreResponseProps) {
    dispatch(setGenreSelected(id, title));
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre)}
            selected={state.selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
