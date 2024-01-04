import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

function MedisinForm(props) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        // if(onupdte){
        //     handleClickOpen();
        //     setValues(onupdte)
        // }
    },[])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var d = new Date();
    let nd = Date(d.setDate(d.getDate() - 1))

    let medisinesSchema = yup.object().shape({
        name: yup.string().required("please enter name"),
        price: yup.number().required("please enter price"),

        date: yup.date().required("please enter date").min(nd, 'please enter valid sate'),

    })

    const formikobj = useFormik({

        initialValues: {
            name: '',
            price: '',
            date: '',

        },

        validationSchema: medisinesSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // onHandleSubmit(values)

            // if (updte) {
            //     // handleUpdate(values);
            // } else {
            //     Tabledata(values)
            // }

            action.resetForm();
            handleClose();
        },

    })

    const { handleSubmit, handleChange, handleBlur, errors, values, touched, setValues } = formikobj;


   return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField

                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                    <TextField

                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}
                    <TextField

                        margin="dense"
                        id="date"
                        name="date"
                        label="date"
                        type="date"
                        fullWidth
                        variant="standard"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.date && touched.date ? <span>{errors.date}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MedisinForm;