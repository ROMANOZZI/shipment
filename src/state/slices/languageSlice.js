import { createSlice } from "@reduxjs/toolkit";
import cookies from "js-cookie";
const languageSlice = createSlice({
    name:'language',
    initialState: cookies.get("lang") || "en",
    reducers:{
     setLanguage:(state,action)=>{
        state=action.payload;
     }
     
    }
});
export  default languageSlice.reducer ;
export const {setLanguage} = languageSlice.actions;