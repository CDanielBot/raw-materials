import * as types from './types'
import { createReducer } from '../../utils'

const initialState = {
    tabIndex: 0
}

const myProfileReducers = createReducer(initialState)({

    [types.MYPROFILE_TAB_CHANGE]: (state, action) => {
        const { tabIndex } = action.payload
        return Object.assign({}, { ...state }, { tabIndex: tabIndex })
    },

    [types.MYPROFILE_MESSAGES_TAB]: (state, action) => {
        const { tabIndex, offerId } = action.payload
        return Object.assign({}, { ...state }, { tabIndex, offerId })
    }

})


export default myProfileReducers