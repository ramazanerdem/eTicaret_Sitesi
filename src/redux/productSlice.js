import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'
import axios from 'axios'

const initialState = {
  products: [],
  filteredProduct: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
}

export const getProducts = createAsyncThunk('getProducts', async () => {
  const response = await axios.get(`https://fakestoreapi.com/products`)
  return response.data
})

export const getCategoryProduct = createAsyncThunk(
  'getCategoryProduct',
  async (category) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    )
    return response.data
  }
)

export const getDetailProduct = createAsyncThunk(
  'getDetailProduct',
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const title = action.payload.toLowerCase()
      const filtered = state.products.filter((product) =>
        product.title.toLowerCase().includes(title)
      )
      console.log(filtered)
      state.filteredProduct = filtered
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL
      })
      //
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS
        state.productDetail = action.payload
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL
      })
      //
      .addCase(getCategoryProduct.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS
        state.products = action.payload
      })
      .addCase(getCategoryProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL
      })
  },
})

export const { searchProducts } = productSlice.actions
export default productSlice.reducer
