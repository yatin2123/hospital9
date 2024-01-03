import { GET_MEDISIN } from "../Actiontype";


const initialState = {
    isLoding: false,
    medisin: [],
    error: null
}

export const medisinReducer = (state = initialState, action) => {
    console.log(action);

    switch(action.type){
            case GET_MEDISIN:
                return {
                    ...state,
                    medisin: action.payload
                }

                default:
                    return state
    }
}