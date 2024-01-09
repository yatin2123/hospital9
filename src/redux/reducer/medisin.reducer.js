import { DELETE_MEDISIN, ERROR_MEDESIN, GET_MEDISIN, LODING_MEDESIN, POST_MEDISIN, UPDATE_MEDESIN } from "../Actiontype";


const initialState = {
    isLoding: false,
    medisin: [],
    error: null
}

export const medisinReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {

        case LODING_MEDESIN:
            return {
                isLoding: true,
                medisin: [],
                error: null
            }
        
        case ERROR_MEDESIN:
            return{
                isLoding: false,
                medisin: [],
                error: action.payload
            }

        case GET_MEDISIN:
            return {
                isLoding: false,
                medisin: action.payload,
                error: null,
            }

        case POST_MEDISIN:
            return {
                ...state,
                medisin: state.medisin.concat(action.payload)
            }

        case DELETE_MEDISIN:
            return {
                ...state,
                medisin: state.medisin.filter((v) => v.id !== action.payload)
            }

        case UPDATE_MEDESIN:
            return {
                ...state,
                medisin: state.medisin.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        default:
            return state
    }
}