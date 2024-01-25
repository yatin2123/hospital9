
import { LOGGED_USER } from "../Actiontype"


const initialState = {
    isLoding: false,
    user: [],
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
        default:
            return state
    }
}
