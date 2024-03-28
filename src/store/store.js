import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
export const myStore = createStore(reducer, applyMiddleware(logger));
