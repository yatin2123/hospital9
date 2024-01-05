import { DELETE_MEDISIN, GET_MEDISIN, POST_MEDISIN, UPDATE_MEDESIN } from "../Actiontype";


const initialState = {
    isLoding: false,
    medisin: [],
    error: null
}

export const medisinReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_MEDISIN:
            return {
                ...state,
                medisin: action.payload
            }
    
        case POST_MEDISIN:
            return{
                ...state,
                medisin: state.medisin.concat(action.payload)
            }

        case DELETE_MEDISIN: 
            return{
                ...state,
                medisin : state.medisin.filter((v) => v.id !== action.payload)
            }

        case UPDATE_MEDESIN:
            return{
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