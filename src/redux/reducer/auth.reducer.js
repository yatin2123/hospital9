
import { LOGGED_USER, LOGOUT_USER } from "../Actiontype"


const initialState = {
    isLoding: false,
    user: null,
    erroe: null
}

export const authReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOGGED_USER:
            return {
                isLoding: false,
                user: action.payload,
                erroe: null
            }

        case LOGOUT_USER:
            return {
                isLoding: false,
                user: null,
                erroe: null
            }
        default:
            return state
    }
}
