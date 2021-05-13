import { useState, useEffect, useContext } from "react";

import { api } from "../services/api";
import { MoviesContext } from "../state/context";

import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function MoviesList() {
  const { state } = useContext(MoviesContext);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${state.selectedGenre.id}`)
      .then(response => {
        setMovies(response.data);
      });
  }, [state.selectedGenre.id]);

  return (
    <div className='movies-list'>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
}
