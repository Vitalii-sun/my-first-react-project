import { all, fork } from "redux-saga/effects";

import articlesWatcher from "./articles";
// ... other Watchers

export default function* rootSaga() {
  yield all([
    fork(articlesWatcher)
    // ... other Watchers
  ]);
}
