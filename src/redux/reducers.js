import { combineReducers } from "redux";

import productReducer from "../pages/home/store/reducer";

const rootReducer = combineReducers({
    productStore: productReducer,

});

export default rootReducer;
