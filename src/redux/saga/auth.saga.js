

import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FORGET_REQWEST, LODIN_REQWEST, LOGGEDREQWEST_USER, LOGOUT_USER, SIGNUP_REQWEST } from '../Actiontype'
import { forgetAPI, loginAPI, logoutAPI, signupAPI } from '../../comman/api/auth.api';
import { loggeduser, loggeduserReqwest, logoutReqwest } from '../action/auth.action';




// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signup(action) {
    console.log('yyyyyyyyyy');
  try {
    const user = yield call(signupAPI, action.payload)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* login(action) {
  try {
    const user = yield call(loginAPI, action.payload.data)
    action.payload.callback("/")
    yield put(loggeduser(user.user))
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* forget(action) {
  try {
    const user = yield call(forgetAPI, action.payload)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* logout(action) {
  try {
    const user = yield call(logoutAPI)
    yield put(loggeduserReqwest())
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* watchSignup() {
    yield takeEvery(SIGNUP_REQWEST, signup)
}

function* watchLogin() {
  yield takeEvery(LODIN_REQWEST, login)
}

function* watchForget() {
  yield takeEvery(FORGET_REQWEST, forget)
}

function* watchLogout (){
  yield takeEvery(LOGOUT_USER, logout)
}

export default function* authSaga() {
    yield all([
        watchSignup(),
        watchLogin(),
        watchForget(),
        watchLogout()
    ])
}




