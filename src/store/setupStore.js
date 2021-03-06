import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/main.js";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function setupStore() {
  return createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        (devTools || function(f) { return f; })
    )
  );
}
