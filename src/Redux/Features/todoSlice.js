import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todoVal:[],
    todoInp:''
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todoVal.push(action.payload)
        }
      
    }
})

export const {addTodo}=todoSlice.actions
export default todoSlice.reducer