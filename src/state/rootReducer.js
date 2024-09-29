import { combineReducers } from "@reduxjs/toolkit";
import shipmentReducer from "./slices/shipmentSlice";
import languageReducer from "./slices/languageSlice";
import currentShipmentReducer from "./slices/currentShipmentSlice";
const rootReducer = combineReducers({
    shipment: shipmentReducer,
    language: languageReducer,
    currentShipment: currentShipmentReducer
});

export default rootReducer;
