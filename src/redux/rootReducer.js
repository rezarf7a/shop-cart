import { combineReducers } from "redux";

import productReducer from "./product/productReducers";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    productsState: productReducer,
    cartState: cartReducer,
});

export default rootReducer;

