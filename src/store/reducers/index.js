import { movies } from "../../data";
import {
  ADD_FAVORITES,
  NEXT_COUNTER,
  PREV_COUNTER,
  REMOVE_FAVORITES,
} from "../actions";

const initialState = {
  movies: movies,
  favMovie: [],
  sira: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      console.log(state.sira, state.movies.length - 1);
      return {
        ...state,
        favMovie: [...state.favMovie, action.payload],
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        sira:
          state.movies.length - state.sira == 1
            ? state.movies.length - 2
            : state.sira,
      };
    case REMOVE_FAVORITES:
      const removedMovie = state.favMovie.find(
        (movie) => movie.id == action.payload
      );
      return {
        ...state,
        favMovie: state.favMovie.filter((movie) => movie.id != action.payload),
        movies: [...state.movies, removedMovie],
        sira: 0,
      };
    case NEXT_COUNTER:
      return { ...state, sira: state.sira + 1 };
    case PREV_COUNTER:
      return { ...state, sira: state.sira - 1 };
    default:
      return state;
  }
};
