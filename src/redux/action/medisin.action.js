import { deleteAllMedisinAPI, getAllMedisinAPI, postAllMedisinAPI, updateAllMedisinAPI } from "../../comman/api/medisin.api"
import { DELETE_MEDISIN, ERROR_MEDESIN, GET_MEDISIN, LODING_MEDESIN, POST_MEDISIN, UPDATE_MEDESIN } from "../Actiontype"


const lodingmedisin = () => (dispatch) => {
    dispatch({type: LODING_MEDESIN})
}

const errormedisin = (error) => (dispatch) => {
    console.log(error);
    dispatch({type: ERROR_MEDESIN, payload: error})
}

export const getmedisin = () => (dispatch) => {
    dispatch(lodingmedisin())

    
    setTimeout(function() {
        getAllMedisinAPI()
        .then((response) => dispatch({type: GET_MEDISIN, payload: response.data}))
        .catch((error) => dispatch(errormedisin(error)))
    }, 2000)
}

export const postmedisin = (data) => (dispatch) => {
    console.log(data);
    postAllMedisinAPI(data)
    .then((response) => dispatch({type: POST_MEDISIN, payload: response.data}))
}

export const deletemedisin = (id) => (dispatch) => {
    deleteAllMedisinAPI(id)
    .then(dispatch({type: DELETE_MEDISIN, payload: id}))
}

export const updatemedisin = (data) => (dispatch) => {
    console.log(data);
    updateAllMedisinAPI(data)
    .then((response) => dispatch({type: UPDATE_MEDESIN, payload: response.data.id}))
}