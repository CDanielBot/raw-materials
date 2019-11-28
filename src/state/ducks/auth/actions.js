import * as types from './types'
import { UserEndpoints } from '../../../api/rest'

export const authenticate = (email, password) => async dispatch => {
    dispatch({ type: types.AUTHENTICATE_REQUEST })
    const response = await UserEndpoints.signIn(email, password)
    dispatch({ type: types.AUTHENTICATE_SUCCESS, payload: { ...response, email } })
    return response
}

export const createAccount = data => async dispatch => {
    dispatch({ type: types.REGISTER_REQUEST })
    await UserEndpoints.register(data)
    dispatch({ type: types.REGISTER_SUCCESS })

    // dispatch({ type: types.AUTHENTICATE_REQUEST })
    // const response = await UserEndpoints.signIn(email, password)
    // dispatch({ type: types.AUTHENTICATE_SUCCESS, payload: { ...response, email } })
    // return response
}

export const signOut = () => async dispatch => {
    await UserEndpoints.signOut()
    dispatch({ type: types.SIGN_OUT })
}

export const updateUser = (userId, email, oldPassword, newPassword) => async dispatch => {
    dispatch({ type: types.UPDATE_USER_REQUEST })
    await UserEndpoints.update(userId, email, oldPassword, newPassword)
    dispatch({ type: types.UPDATE_USER_SUCCESS })
}
