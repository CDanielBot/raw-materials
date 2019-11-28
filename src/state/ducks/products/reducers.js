import * as types from './types'
import { createReducer } from '../../utils'
import update from 'immutability-helper';

const initialState = {
    data: [],
    count: 0,
    isLoading: true,
}

const productsReducer = createReducer(initialState)({

    [types.GET_PRODUCTS_REQUEST]: (state) => {
        return Object.assign({}, { ...state }, { isLoading: true })
    },

    [types.GET_PRODUCTS_SUCCESS]: (state, action) => {
        const { products } = action.payload

        return Object.assign({}, { ...state }, { data: products, isLoading: false, count: products.length })
    },

    // TODO: GET PRODUCTS ERROR?

    [types.CREATE_PRODUCT_REQUEST]: (state) => {
        return Object.assign({}, { ...state }, { isLoading: true, })
    },

    [types.CREATE_PRODUCT_SUCCESS]: (state, action) => {
        const { product } = action.payload

        return update(state, {
            data: { $unshift: [product] },
            isLoading: { $set: false },
            count: { $set: state.data.length + 1 },
        })
        // return Object.assign({}, { ...state }, { isLoading: true, })
    },

    [types.UPDATE_PRODUCT_REQUEST]: (state) => {
        return update(state, {
            isLoading: { $set: true }
        })
    },

    [types.UPDATE_PRODUCT_SUCCESS]: (state, action) => {
        const { updatedProduct } = action.payload

        return update(state, {
            data: data => data.map(product => product.id !== updatedProduct.id ? product : updatedProduct),
            isLoading: { $set: false },
        })
    },

    [types.DELETE_PRODUCT_REQUEST]: (state) => {
        return update(state, {
            isLoading: { $set: true }
        })
    },

    [types.DELETE_PRODUCT_SUCCESS]: (state, action) => {
        const { id } = action.payload

        return update(state, {
            data: data => data.filter(product => product.id !== id),
            isLoading: { $set: false },
            count: { $set: state.data.length + 1 },
        })
    },

})


export default productsReducer