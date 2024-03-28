import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie.jsx";
import FavMovie from "./components/FavMovie.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  nextCounter,
  prevCounter,
} from "./store/actions/index.js";

function App() {
  const sira = useSelector((store) => store.sira);
  const dispacth = useDispatch();
  const favMovies = useSelector((store) => store.favMovie);
  const movie = useSelector((store) => store.movies[sira]);
  const movies = useSelector((store) => store.movies);

  const handleNextCounter = () => {
    dispacth(nextCounter());
  };

  const handlePrevCounter = () => {
    dispacth(prevCounter());
  };

  const handleAddFavorites = () => {
    dispacth(addFavorites(movie));
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {movies.length == 0 ? (
            <div className="text-center">
              {" "}
              Eklenecek yeni film bulunamadı...{" "}
            </div>
          ) : (
            <Movie sira={sira} />
          )}

          <div className="flex gap-3 justify-end py-3">
            {sira > 0 && (
              <button
                onClick={handlePrevCounter}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            {sira < movies.length - 1 && (
              <button
                onClick={handleNextCounter}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}

            {movies.length != 0 && (
              <button
                onClick={handleAddFavorites}
                className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              >
                Listeme ekle
              </button>
            )}
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
