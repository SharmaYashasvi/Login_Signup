
// creating redux global store
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// importing userreducer from reducers
import {
  userReducer,
} from "./reducers/userReducer";


const reducer = combineReducers({
  user: userReducer,
});

// using thunk as middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
