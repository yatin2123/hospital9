import { FORGET_REQWEST, LODIN_REQWEST, SIGNUP_REQWEST } from "../Actiontype"



export const signupReqwest = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQWEST, payload: data})
}

export const loginReqwest = (data) => (dispatch) => {
    dispatch({type: LODIN_REQWEST, payload: data})
}

export const forgetReqwest = (data) => (dispatch) => {
    dispatch({type: FORGET_REQWEST, payload: data})
}
