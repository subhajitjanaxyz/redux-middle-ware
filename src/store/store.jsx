import { configureStore } from "@reduxjs/toolkit";
import data from "./countSlice";


// function subhajit(store){
//     return (next)=>{
//       return (action)=>{
//         return console.log("subhajit")
//       }
//     }
//   }

function logger(store){
    return function(next){
        return function(action){
            console.log("subhajit")
        }
    }
}


export const store=configureStore({
    reducer:{
        data

    },
    middleware:[logger]
})
