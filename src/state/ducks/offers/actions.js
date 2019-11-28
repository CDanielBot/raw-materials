import * as types from './types'
import { MessageEndpoints } from '../../../api/rest'

export const filterOffers = (user) => async dispatch => {
    // dispatch({ type: types.LOAD_OFFERS_REQUEST })
    const filter = user.userType === 'BUYER' ? { askerId: user.userId } : { ownerId: user.userId }
    const response = await MessageEndpoints.findOffers(filter)
    dispatch({ type: types.LOAD_OFFERS_SUCCESS, payload: { offers: response } })
}