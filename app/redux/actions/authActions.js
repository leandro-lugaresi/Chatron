import { push } from 'react-router-redux'
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../../constants/ActionTypes'

const BASE_URL = 'http://localhost:3001'

export function signup(user) {
  return { type: SIGN_UP_REQUEST, user }
}

export function signUpRequest(user) {
  return { type: SIGN_UP_REQUEST }
}

export function signUpSuccess() {
  return { type: SIGN_UP_SUCCESS }
}

export function signUpFailure() {
  return { type: SIGN_UP_FAILURE }
}

export function signup(user) {
  return dispatch => {
    dispatch(signUpRequest())
    return fetch(`${BASE_URL}/api/signup`, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) dispatch(signUpFailure())
      dispatch(signUpSuccess())
      dispatch(push('/'))
    })
    .catch(err => { throw err })
  }
}