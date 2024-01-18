import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { DataGrid } from '@mui/x-data-grid';
import MedisinForm from './MedisinForm';
import { DataGrid } from '@mui/x-data-grid';

import { postRequest } from '../../../comman/request';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { addMedisin, deleteMedisin, getMedisin, updateMedisin } from '../../../redux/slice/medisin.slice';

function Medisin(props) {
    const [updte, setUpdate] = useState(false)

    const medisin = useSelector(state => state.medisin)
    console.log(medisin.medisin);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMedisin());

    }, [])



    const handleFormSubmit = (data) => {
        console.log(data);

        if (updte) {
            dispatch(updateMedisin(data))
        } else {
            // dispatch(postmedisin(data))

            dispatch(addMedisin(data))
        }

    }

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteMedisin(id))

    }

    const handleEdit = (data) => {
        setUpdate(data)

        // dispatch(updatemedisin(data))
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
            {
                medisin.isLoding ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box> :

                    medisin.error ? <p>{medisin.error.message}</p> :

                    <>
                        <MedisinForm onHandleSubmit={handleFormSubmit} onupdate={updte} />
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
                    </>

            }

        </div>
    );
}

export default Medisin;