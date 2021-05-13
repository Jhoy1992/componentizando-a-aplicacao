import { useContext } from "react";
import { MoviesContext } from "../state/context";

export function Header() {
  const { state } = useContext(MoviesContext);

  return (
    <header>
      <span className='category'>
        Categoria:<span> {state.selectedGenre.title}</span>
      </span>
    </header>
  );
}
