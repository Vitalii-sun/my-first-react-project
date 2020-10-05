import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLES_REQUEST,
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_FAILURE,
  REMOVE_ARTICLES_REQUEST,
  REMOVE_ARTICLES_SUCCESS,
  REMOVE_ARTICLES_FAILURE,
  EDIT_ARTICLES_REQUEST,
  EDIT_ARTICLES_SUCCESS,
  EDIT_ARTICLES_FAILURE
} from "../constans";

export const A_FethArticlesRequest = () => {
  return { type: FETCH_ARTICLES_REQUEST };
};

export const A_FethArticlesSeccuss = data => {
  return { type: FETCH_ARTICLES_SUCCESS, payload: data };
};

export const A_FethArticlesFailure = err => {
  return { type: FETCH_ARTICLES_FAILURE, payload: err };
};

export const A_AddArticlesRequest = data => {
  return { type: ADD_ARTICLES_REQUEST, payload: data };
};

export const A_AddArticlesSeccuss = data => {
  return { type: ADD_ARTICLES_SUCCESS, payload: data };
};

export const A_AddArticlesFailure = err => {
  return { type: ADD_ARTICLES_FAILURE, payload: err };
};

export const A_RemoveArticlesRequest = id => {
  return { type: REMOVE_ARTICLES_REQUEST, payload: id };
};

export const A_RemoveArticlesSeccuss = id => {
  return { type: REMOVE_ARTICLES_SUCCESS, payload: id };
};

export const A_RemoveArticlesFailure = err => {
  return { type: REMOVE_ARTICLES_FAILURE, payload: err };
};

export const A_EditArticlesRequest = data => {
  return { type: EDIT_ARTICLES_REQUEST, payload: data };
};

export const A_EditArticlesSeccuss = id => {
  return { type: EDIT_ARTICLES_SUCCESS, payload: id };
};

export const A_EditArticlesFailure = err => {
  return { type: EDIT_ARTICLES_FAILURE, payload: err };
};
