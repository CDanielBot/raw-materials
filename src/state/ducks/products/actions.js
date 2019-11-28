import * as types from './types'
import { MaterialEndpoints } from '../../../api/rest'

export const getProducts = (userId, suggestion = '') => async dispatch => {
    let filter = { userId }
    if (suggestion) filter = { ...filter, suggestion }

    dispatch({ type: types.GET_PRODUCTS_REQUEST })

    const products = await MaterialEndpoints.filter(filter)
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: { products } })
    // dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: { products: mockProducts } })
}

export const createProduct = (product, image) => async dispatch => {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST })

    const newProduct = await MaterialEndpoints.create(product, image)
    dispatch({ type:types.CREATE_PRODUCT_SUCCESS, payload: { product: newProduct} })
}

export const updateProduct = updateProduct => async dispatch => {
    dispatch({ type:types.UPDATE_PRODUCT_REQUEST })

    const updatedProduct = await MaterialEndpoints.update(updateProduct)
    dispatch({ type:types.UPDATE_PRODUCT_SUCCESS, payload: { updatedProduct } })
}

export const deleteProduct = (id) => async dispatch => {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST })

    await MaterialEndpoints.delete(id)
    dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: { id } })
}
