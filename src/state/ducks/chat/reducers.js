import * as types from './types'
import { createReducer } from '../../utils'

const initialState = {
   //Write initial State
   isLoading: true
}

const offersReducer = createReducer(initialState)({

    [types.EXAMPLE]: (state) => {
        return state;
    },

})


export default offersReducer