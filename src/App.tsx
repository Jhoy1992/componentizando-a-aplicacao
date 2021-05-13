import { useEffect, useState, useReducer } from "react";

import { MoviesContext } from "./state/context";
import { moviesReducer } from "./state/reducer";
import { initialMovieState } from "./state/state";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [state, dispatch] = useReducer(moviesReducer, initialMovieState);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContext.Provider>
  );
}
