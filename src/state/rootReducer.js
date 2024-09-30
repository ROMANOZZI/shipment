import { combineReducers } from "@reduxjs/toolkit";
import shipmentReducer from "./slices/shipmentSlice";
import languageReducer from "./slices/languageSlice";
import currentShipmentReducer from "./slices/currentShipmentSlice";
import listSliceReducer from "./slices/listSlice";
const rootReducer = combineReducers({
    shipment: shipmentReducer,
    language: languageReducer,
    currentShipment: currentShipmentReducer,
    list:listSliceReducer
});

export default rootReducer;
