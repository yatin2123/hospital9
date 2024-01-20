import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, getMetadata, getStorage, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "../../firebase"



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
        console.log(data);

        const rno = Math.floor(Math.random() * 100000);
        const storageRef = ref(storage, 'medisin/' + rno + "_" + data.file.name);
        let medisindata = { ...data };
        console.log(medisindata);

        await uploadBytes(storageRef, data.file).then(async (snapshot) => {

            await getDownloadURL(snapshot.ref)
                .then(async (url) => {
                    console.log(url);


                    let aptdoc = await addDoc(collection(db, "medisin"), { ...data, file: url, file_name: rno + '_' + data.file.name });
                    console.log('aaaaaaaaaaaaaaaaa', aptdoc.id);

                    medisindata = { id: aptdoc.id, ...data, file: url, file_name: rno + '_' + data.file.name }
                })
        }).catch((e) => console.log(e))


        return medisindata;
        // try {
        //     const docRef = await addDoc(collection(db, "medisin"), data);
        //     console.log("Document written with ID: ", docRef.id);
        //     return { id: docRef.id, ...data }
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }

    }
)

export const deleteMedisin = createAsyncThunk(
    'medisin/delete',

    async (data) => {
        console.log(data);

        const medisinRef = ref(storage, "medisin/" + data.file_name);

        // Delete the file
        await deleteObject(medisinRef).then(async (data) => {
            await deleteDoc(doc(db, "medisin", data.id));
        }).catch((error) => {
            console.log(error);
        });

        return data.id;
    }

)


export const updateMedisin = createAsyncThunk(
    'medisin/update',

    async (data) => {
        console.log(data);
        let newData = []

        if (typeof data.file === 'string') {
            const medisinRef = doc(db, "medisin", data.id);

            let newData = { ...data };
            delete newData.id;
            await updateDoc(medisinRef, newData);
        } else {
            const medisinRef = ref(storage, "medisin/" + data.file_name);

            // Delete the file
            await deleteObject(medisinRef).then(async (data) => {
                const rno = Math.floor(Math.random() * 100000);
                const storageRef = ref(storage, 'medisin/' + rno + "_" + data.file.name);

                await uploadBytes(storageRef, data.file).then(async (snapshot) => {

                    await getDownloadURL(snapshot.ref)
                        .then(async (url) => {
                            console.log(url);
                            const medisinRef = doc(db, "medisin", data.id);

                             newData = { ...data, file: url, file_name:  rno + "_" + data.file.name};
                            delete newData.id;
                            await updateDoc(medisinRef, newData);
                            newData.id = data.id
                        })
                })
            })
        }

        // const medisinRef = doc(db, "medisin", data.id);

        // let newData = { ...data };
        // delete newData.id;
        // await updateDoc(medisinRef, newData);

        return newData
    }
)

const handleLoding = (state, action) => {
    state.isLoding = true;
    state.error = null
}

const handleError = (state, action) => {
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
        builder.addCase(addMedisin.rejected, handleError)

        builder.addCase(getMedisin.pending, handleLoding)
        builder.addCase(getMedisin.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoding = false;
            state.medisin = action.payload;
            state.error = null;
        })
        builder.addCase(getMedisin.rejected, handleError)

        builder.addCase(deleteMedisin.fulfilled, (state, action) => {
            state.isLoding = false;;
            state.medisin = state.medisin.filter((v) => v.id !== action.payload);
            state.error = null;
        })

        builder.addCase(updateMedisin.fulfilled, (state, action) => {
            state.isLoding = false;;
            state.medisin = state.medisin.map((v) => {
                if (v.id === action.payload.id) {
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