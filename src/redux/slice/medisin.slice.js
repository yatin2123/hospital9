import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";



const initialState = {
    isLoding: false,
    medisin : [],
    error: null
}

export const addMedisin = createAsyncThunk(
    'medisin/add',

    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "medisin"), data);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        return data;
    }
)

export const medisinSlice = createSlice ({
    name: 'medisin',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addMedisin.fulfilled, (state, action) => {
            console.log(action);
            
            state.medisin = state.medisin.concat(action.payload)
          
        })
    }
})

export default medisinSlice.reducer