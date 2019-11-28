import * as types from './types'
import { MaterialEndpoints } from '../../../api/rest'
import { SuggestionEndpoints } from '../../../api/rest'

export const filter = (filter) => async dispatch => {
    // dispatch({ type: types.LOAD_MATERIALS_REQUEST })
    const materials = await MaterialEndpoints.filter({suggestion: filter})
    dispatch({ type: types.LOAD_MATERIALS_SUCCESS, payload: { materials } })
}

export const searchSuggestions = (suggestion) => async dispatch => {
    // dispatch({ type: types.SEARCH_SUGGESTIONS_REQUEST })
    const suggestions = await SuggestionEndpoints.searchSuggestions(suggestion)
    // dispatch({ type: types.SEARCH_SUGGESTIONS_SUCCESS, payload: { suggestions } })
    return suggestions
}