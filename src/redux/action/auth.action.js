import { FORGET_REQWEST, LODIN_REQWEST, LOGGED_USER, SIGNUP_REQWEST } from "../Actiontype"



export const signupReqwest = (data) => (dispatch) => {
    dispatch({type: SIGNUP_REQWEST, payload: data})
}

export const loginReqwest = (data) => (dispatch) => {
    dispatch({type: LODIN_REQWEST, payload: data})
}

export const forgetReqwest = (data) => (dispatch) => {
    dispatch({type: FORGET_REQWEST, payload: data})
}

export const loggeduser = (data) => (dispatch) => {
    dispatch({type: LOGGED_USER, payload: data})
}
