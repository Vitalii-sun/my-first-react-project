import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer(),
  compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

sagaMiddleware.run(rootSaga);

export default store;
