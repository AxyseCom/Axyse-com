import { CREATE_PAGE } from "./types";

const initialState = {
  pages: [],
};

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAGE:
      return { ...state, pages: state.pages.concat(action.payload) };
    default: return state
  }
};
