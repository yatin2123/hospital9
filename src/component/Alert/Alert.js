import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../redux/slice/alert.slice';

function Alert(props) {

    const alert = useSelector(state => state.alert)
    console.log(alert);

    const dispatch = useDispatch

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            })

            const timer = setTimeout(() => {
                dispatch(resetAlert())
            }, 2000)

            return () => {
                clearTimeout(timer)
            }
        }



    }, [alert.text])

    return (
        <div>

        </div>
    );
}

export default Alert;