import { createSlice } from "@reduxjs/toolkit";

 const count=createSlice({
    name:"subhajit",
    initialState:0,
    reducers:{
        increment:(state)=>{
            console.log("reducer")
           return state+1
        }
    }
    
})
export const {increment}=count.actions
export default count.reducer