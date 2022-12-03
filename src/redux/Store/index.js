import { configureStore } from "@reduxjs/toolkit"; //es6 import used // configure store used instead of createstore which is improved version
import Reducer from "../Reducer";
import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

let store = configureStore({ reducer: Reducer });

export default store;