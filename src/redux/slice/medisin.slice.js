import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";



const initialState = {
    isLoding: false,
    medisin: [],
    error: null
}

export const getMedisin = createAsyncThunk(
    'medisin/get',

    async () => {
        // await new Promise((resolve, reject) => setTimeout(resolve, 2000))

        let data = [];

        const querySnapshot = await getDocs(collection(db, "medisin"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        })
        console.log(data);
        return data;

        // return response.data
    }
)


export const addMedisin = createAsyncThunk(
    'medisin/add',

    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "medisin"), data);
            console.log("Document written with ID: ", docRef.id);
            return { id: docRef.id, ...data }
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const deleteMedisin = createAsyncThunk(
    'medisin/delete',

    async (id) => {
        await deleteDoc(doc(db, "medisin", id));

        return id;
    }

)


export const updateMedisin = createAsyncThunk(
    'medisin/update',

    async (data) => {
        console.log(data);

        const medisinRef = doc(db, "medisin", data.id);

        let newData = {...data};
        delete newData.id;
        await updateDoc(medisinRef, newData);

        return data
    }
)

const handleLoding =  (state, action) => {
    state.isLoding = true;
    state.error = null
}

const dandleError = (state, action) => {
    state.isLoding = false;
    state.error = action.payload;
}

export const medisinSlice = createSlice({
    name: 'medisin',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addMedisin.pending, handleLoding)
        builder.addCase(addMedisin.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoding = false;
            state.medisin = state.medisin.concat(action.payload);
            state.error = null;
        })
        builder.addCase(addMedisin.rejected, dandleError)

        builder.addCase(getMedisin.pending, handleLoding)
        builder.addCase(getMedisin.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoding = false;
            state.medisin = action.payload;
            state.error = null;
        })
        builder.addCase(getMedisin.rejected, dandleError)

        builder.addCase(deleteMedisin.fulfilled, (state, action) => {
            state.isLoding = false;;
            state.medisin = state.medisin.filter((v) => v.id !== action.payload);
            state.error = null;
        })

        builder.addCase(updateMedisin.fulfilled, (state, action) => {
            state.isLoding = false;;
            state.medisin = state.medisin.map((v) => {
                if(v.id === action.payload.id) {
                    return action.payload
                } else {
                    return v
                }
            })
            state.error = null;
        })
    }
})

export default medisinSlice.reducer