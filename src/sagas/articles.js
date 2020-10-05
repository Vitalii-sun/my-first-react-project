import { call, put } from "redux-saga/effects";
import {
  FETCH_ARTICLES_REQUEST,
  ADD_ARTICLES_REQUEST,
  REMOVE_ARTICLES_REQUEST,
  EDIT_ARTICLES_REQUEST
} from "../constans";
import {
  A_FethArticlesSeccuss,
  A_FethArticlesFailure,
  A_AddArticlesSeccuss,
  A_AddArticlesFailure,
  A_RemoveArticlesSeccuss,
  A_RemoveArticlesFailure,
  A_EditArticlesSeccuss,
  A_EditArticlesFailure
} from "../actions";
import { v4 as uuidv4 } from "uuid";

import { takeLatest } from "redux-saga/effects";

function* fetchActions() {
  try {
    // TODO -> call ->request to BE
    const articles = [
      { id: 1, title: "001", text: "Some test 001" },
      { id: 2, title: "002", text: "Some test 002" },
      { id: 3, title: "003", text: "Some test 003" }
    ];
    yield put(A_FethArticlesSeccuss(articles));
  } catch (err) {
    // TODO -> err
    yield put(A_FethArticlesFailure(err));
  } finally {
    // TODO
  }
}

function* addActions({ payload }) {
  try {
    const response = { ...payload, id: uuidv4() };
    yield put(A_AddArticlesSeccuss(response));
  } catch (err) {
    // TODO -> err
    yield put(A_AddArticlesFailure(err));
  } finally {
    // TODO
  }
}

function* removeActions({ payload }) {
  try {
    yield put(A_RemoveArticlesSeccuss(payload));
  } catch (err) {
    // TODO -> err
    yield put(A_RemoveArticlesFailure(err));
  } finally {
    // TODO
  }
}

function* editActions({ payload }) {
  console.log(payload);
  try {
    const response = { ...payload };
    yield put(A_EditArticlesSeccuss(response));
  } catch (err) {
    // TODO -> err
    yield put(A_EditArticlesFailure(err));
  } finally {
    // TODO
  }
}

export default function* articlesWatcher() {
  yield takeLatest(FETCH_ARTICLES_REQUEST, fetchActions);
  yield takeLatest(ADD_ARTICLES_REQUEST, addActions);
  yield takeLatest(REMOVE_ARTICLES_REQUEST, removeActions);
  yield takeLatest(EDIT_ARTICLES_REQUEST, editActions);
}
