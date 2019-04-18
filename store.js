//Import creatStore and applyMiddleware
import { createStore, applyMiddleware, compose } from "redux";

//import thunk
import thunk from "redux-thunk";
import rootReducer from "./src/reducers/rootReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
