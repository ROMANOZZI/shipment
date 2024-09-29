import { createSlice } from "@reduxjs/toolkit";

const initialState =   "84043113";
export const currentShipmentSlice = createSlice({
    name: "currentShipment",
    initialState,
    reducers: {
        setCurrentShipment: (state, action) => {
            state.currentShipment = action.payload;
        }
    }
})

export const { setCurrentShipment } = currentShipmentSlice.actions;

export default currentShipmentSlice.reducer;
