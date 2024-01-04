import { getAllMedisinAPI, postAllMedisinAPI } from "../../comman/api/medisin.api"
import { GET_MEDISIN, POST_MEDISIN } from "../Actiontype"

export const getmedisin = () => (dispatch) => {

    getAllMedisinAPI()
        .then((response) => dispatch({type: GET_MEDISIN, payload: response.data}))

}

export const postmedisin = (data) => (dispatch) => {
    console.log(data);
    postAllMedisinAPI(data)
    .then((response) => dispatch({type: POST_MEDISIN, payload: response.data}))
}