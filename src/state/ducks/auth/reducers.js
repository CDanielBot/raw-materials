import * as types from './types'
import { createReducer } from '../../utils'

const initialState = {
    user: {
        token: '',
        email: '',
        isAuthenticated: false,
    }
}

const authReducer = createReducer(initialState)({

    [types.AUTHENTICATE_REQUEST]: (state) => {
        return state
    },

    [types.AUTHENTICATE_SUCCESS]: (state, action) => {
        return Object.assign(
            {},
            ...state,
            {
                user: {
                    token: action.payload.token,
                    userId: action.payload.userId,
                    email: action.payload.email,
                    userType: action.payload.userType,
                    isAuthenticated: true
                }
            }
        )
    },

    [types.AUTHENTICATE_ERROR]: (state) => {
        return state;
    },

    [types.SIGN_OUT]: () => {
        return initialState
    },
    [types.REGISTER_REQUEST]: (state) => {
        return state
     },

     [types.REGISTER_SUCCESS]: (state) => {
        return state
     }
})


export default authReducer

// if multiple smaller reducers are required in this page, 
// combine them and export as default