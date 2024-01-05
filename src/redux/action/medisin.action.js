import { deleteAllMedisinAPI, getAllMedisinAPI, postAllMedisinAPI, updateAllMedisinAPI } from "../../comman/api/medisin.api"
import { DELETE_MEDISIN, GET_MEDISIN, POST_MEDISIN, UPDATE_MEDESIN } from "../Actiontype"

export const getmedisin = () => (dispatch) => {

    getAllMedisinAPI()
        .then((response) => dispatch({type: GET_MEDISIN, payload: response.data}))

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