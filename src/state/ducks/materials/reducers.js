import * as types from './types'
import { createReducer } from '../../utils'

const initialState = {
    data: [],
    count: 0,
    isLoading: true,
    suggestions: []
}

const materialsReducer = createReducer(initialState)({

    [types.LOAD_MATERIALS_REQUEST]: (state) => {
        return Object.assign({}, { ...state }, { isLoading: true })
    },

    [types.LOAD_MATERIALS_SUCCESS]: (state, action) => {
        const { materials } = action.payload
        return Object.assign({}, { ...state }, { data: materials, isLoading: false, count: materials.length })
        // return { data: materials, isLoading: false, count: materials.length }
    },

    [types.LOAD_MATERIALS_ERROR]: () => {
        return initialState
    },

    [types.SEARCH_SUGGESTIONS_REQUEST]: (state) => {
        return state
    },

    [types.SEARCH_SUGGESTIONS_SUCCESS]: (state, action) => {
        const { suggestions } = action.payload
        return Object.assign({}, { ...state }, { suggestions: suggestions })
    },

    [types.SEARCH_SUGGESTIONS_ERROR]: () => {
        return initialState
    }
})


export default materialsReducer
