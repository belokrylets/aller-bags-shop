import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { getNormalizeProduct } from "shared/utils/getNormalize"
import { RootState } from "store/store"
import { IImages } from "../imagesSlice/images.modal"
import { fetchAllProducts } from "./actions"
import { IProducts } from "./products.modal"

const productsAdapter = createEntityAdapter<IProducts>()
const productsImagesAdapter = createEntityAdapter<IImages>()

const initialState = {
  products: productsAdapter.getInitialState(),
  productsImages: productsImagesAdapter.getInitialState(),
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProducts>) => {
      productsAdapter.addOne(state.products, action.payload)
    },
    updateProduct: (
      state,
      action: PayloadAction<{ id: string; changes: IProducts }>
    ) => {
      productsAdapter.updateOne(state.products, action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      productsAdapter.removeOne(state.products, action.payload)
    },
    addManyProducts: (state, action: PayloadAction<IProducts[]>) => {
      productsAdapter.addMany(state.products, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, action: PayloadAction<IProducts[]>) => {
        const normalizeProducts = getNormalizeProduct(action.payload)
        productsAdapter.addMany(state.products, normalizeProducts.products)
        productsImagesAdapter.addMany(
          state.productsImages,
          normalizeProducts.imagesIds
        )
      }
    )
  },
})
export const productsSelector = productsAdapter.getSelectors(
  (state: RootState) => state.products.products
)

export const productsImagesSelector = productsImagesAdapter.getSelectors(
  (state: RootState) => state.products.productsImages
)
export const { actions } = productsSlice
export default productsSlice.reducer
