import * as types from './types'

export const changeTab = (tabIndex) => dispatch => {
    dispatch({ type: types.MYPROFILE_TAB_CHANGE, payload: { tabIndex: tabIndex } })
}

export const changeToMessages = (offerId, tabIndex) => dispatch => {
    dispatch({ type: types.MYPROFILE_MESSAGES_TAB, payload: { tabIndex, offerId } })
}