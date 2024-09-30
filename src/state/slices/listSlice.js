import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
    initialState:false,
    name:"list",
    reducers:{
        setList:(state,action)=>{
            return action.payload;
        }
    }
});

export default listSlice.reducer;
export const {setList} = listSlice.actions;