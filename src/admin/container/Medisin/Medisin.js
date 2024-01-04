import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { DataGrid } from '@mui/x-data-grid';
import MedisinForm from './MedisinForm';
import { DataGrid } from '@mui/x-data-grid';
import { getmedisin, postmedisin } from '../../../redux/action/medisin.action';
import { postRequest } from '../../../comman/request';
import { IconButton } from '@mui/material';

function Medisin(props) {
    const [updte, setUpdate] = useState(false)

    const medisin = useSelector(state => state.medisin)
    console.log(medisin);


    const dispatch = useDispatch()

    useEffect(() => {
        // let localData = JSON.parse(localStorage.getItem("medisin"));
        // if (localData) {
        //     setMData(localData);
        // }
        dispatch(getmedisin());

    }, [])

    const handleFormSubmit = (data) => {

        dispatch(postmedisin(data))



        // let localData = JSON.parse(localStorage.getItem("medisin"));
        // // console.log(localData);
        // let id = Math.floor(Math.random() * 1000)
        // if (localData) {
        //     if (updte) {
        //         let localData = JSON.parse(localStorage.getItem("medisin"));

        //         let index = localData.findIndex((v) => v.id == data.id)
        //         console.log(index);

        //         localData[index] = data;

        //         localStorage.setItem("medisin", JSON.stringify(localData))
        //         setMData(localData)

        //         setUpdate(false)
        //     } else {
        //         localData.push({ id: id, ...data });
        //         localStorage.setItem("medisin", JSON.stringify(localData))
        //         setMData(localData)
        //         // console.log(localData);
        //     }

        // } else {
        //     localStorage.setItem("medisin", JSON.stringify([{ id, ...data }]))
        //     setMData([{ id, ...data }]) 
        // }
    }


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        {
            field: 'Action', headerName: 'Action',

            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )

        },

    ];


    return (
        <div>
            <MedisinForm onHandleSubmit={handleFormSubmit} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medisin.medisin} 
                    columns={columns} 
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Medisin;