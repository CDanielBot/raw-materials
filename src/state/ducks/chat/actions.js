import * as types from './types'
// imp endpoints from rest.js

export const filterMessages = () => async dispatch => {
    dispatch({ type: types.EXAMPLE, payload: { empty: 'empty' } })
}

