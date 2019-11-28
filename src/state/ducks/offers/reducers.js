import * as types from './types'
import { createReducer } from '../../utils'

const initialState = {
    offers: []
}

const offersReducer = createReducer(initialState)({

    [types.LOAD_OFFERS_REQUEST]: (state) => {
        return state
    },

    [types.LOAD_OFFERS_SUCCESS]: (state, action) => {
        return action.payload
    },

    [types.LOAD_OFFERS_ERROR]: () => {
        return initialState
    }
})


export default offersReducer
