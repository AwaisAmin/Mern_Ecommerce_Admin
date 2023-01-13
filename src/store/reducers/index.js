import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;
