import { createSelector } from "reselect";

const getState = state => state.articleReducer;

export const getArticles = () =>
  createSelector(getState, state => {
    return state.articles;
  });
