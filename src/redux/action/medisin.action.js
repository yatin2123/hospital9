import { getAllMedisinAPI } from "../../comman/api/medisin.api"
import { GET_MEDISIN } from "../Actiontype"

export const getmedisin = () => (dispatch) => {

    getAllMedisinAPI()
        .then((response) => dispatch({type: GET_MEDISIN, payload: response.data}))

}