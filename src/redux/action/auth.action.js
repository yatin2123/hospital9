import { FORGET_REQWEST, LODIN_REQWEST, LOGGEDREQWEST_USER, LOGGED_USER, LOGOUT_USER, SIGNUP_REQWEST } from "../Actiontype"



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

export const logoutReqwest = () => (dispatch) => {
    dispatch({type: LOGOUT_USER})
}

export const loggeduserReqwest = () => (dispatch) => {
    dispatch({type: LOGGEDREQWEST_USER})
}

