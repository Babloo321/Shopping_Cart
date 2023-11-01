import { composeWithDevTools } from "redux-devtools-extension";
import shopReducer from "./shopReducer";
import { createStore } from "redux";
const store = createStore(shopReducer, composeWithDevTools);
export default store;