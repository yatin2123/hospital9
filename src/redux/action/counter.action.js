import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../Actiontype"


export const Increment = () => (dispatch) => {
    dispatch({type: COUNTER_INCREMENT})
}

export const Decrement = () => (dispatch) => {
    dispatch({type: COUNTER_DECREMENT})
}