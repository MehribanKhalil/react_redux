import { createSlice } from "@reduxjs/toolkit";
const initialState={
    deyer:0
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        artir:(state)=>{
            state.deyer=state.deyer+1
        },
        azalt:(state)=>{
            state.deyer=state.deyer-1
        }
    }
})

export const {artir,azalt}=counterSlice.actions
export default counterSlice.reducer