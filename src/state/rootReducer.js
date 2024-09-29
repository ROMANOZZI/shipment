import { combineReducers } from "@reduxjs/toolkit";
import shipmentReducer from "./slices/shipmentSlice";
import languageReducer from "./slices/languageSlice";

const rootReducer = combineReducers({
    shipment: shipmentReducer,
    language: languageReducer
});

export default rootReducer;
