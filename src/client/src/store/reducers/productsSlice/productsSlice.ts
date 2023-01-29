import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getProductsNormalized } from "utils/getNormalized"
import { fetchAllProducts } from "./actions"
import { IProducts } from "./products.modal"
import { actions as imagesAction } from "../imagesSlice/imagesSlice"

const productsAdapter = createEntityAdapter<IProducts>()

const initialState = productsAdapter.getInitialState()

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: productsAdapter.addOne,
    updateProduct: productsAdapter.updateOne,
    removeProduct: productsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, action: PayloadAction<IProducts>) => {
        const normalizedCategories = getProductsNormalized(action.payload)
        productsAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})
export const productsSelector = productsAdapter.getSelectors(
  (state: RootState) => state.products
)
export const { actions } = productsSlice
export default productsSlice.reducer
