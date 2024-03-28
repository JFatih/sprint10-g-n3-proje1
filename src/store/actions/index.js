export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const NEXT_COUNTER = "NEXT_COUNTER";
export const PREV_COUNTER = "PREV_COUNTER";

export const addFavorites = (e) => {
  return {
    type: ADD_FAVORITES,
    payload: e,
  };
};

export const removeFavorites = (e) => {
  return {
    type: REMOVE_FAVORITES,
    payload: e,
  };
};

export const nextCounter = () => {
  return {
    type: NEXT_COUNTER,
  };
};

export const prevCounter = () => {
  return {
    type: PREV_COUNTER,
  };
};
