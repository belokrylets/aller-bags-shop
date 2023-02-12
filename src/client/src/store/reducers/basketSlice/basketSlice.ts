import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { fetchBasket } from "./actions"
import { IBasket, IBasketProducts } from "./basket.modal"

const basketAdapter = createEntityAdapter<IBasketProducts>()

const initialState = {
  baskedId: "",
  products: basketAdapter.getInitialState(),
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketProduct: (state, action: PayloadAction<IBasketProducts>) => {
      basketAdapter.addOne(state.products, action.payload)
    },
    removeBasketProduct: (state, action: PayloadAction<string>) => {
      basketAdapter.removeOne(state.products, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBasket.fulfilled,
      (state, action: PayloadAction<IBasket>) => {
        console.log("action.payload", action.payload)
        state.baskedId = action.payload.id
        basketAdapter.addMany(state.products, action.payload.products)
      }
    )
  },
})
export const basketSelector = basketAdapter.getSelectors(
  (state: RootState) => state.basket.products
)
export const { actions } = basketSlice
export default basketSlice.reducer
