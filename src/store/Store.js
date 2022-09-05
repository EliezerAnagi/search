import { createStore, applyMiddleware } from "redux";
import ContactReducer from "../reducers/ContactReducers";

let store = createStore(ContactReducer, applyMiddleware());

export default store;
