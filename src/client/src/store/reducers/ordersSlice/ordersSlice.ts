import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { fetchAllOrders } from "./actions"
import { IOrders } from "./orders.modal"

const ordersAdapter = createEntityAdapter<IOrders>()

const initialState = ordersAdapter.getInitialState()

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeOrder: ordersAdapter.removeOne,
    addManyOrders: ordersAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllOrders.fulfilled,
      (state, action: PayloadAction<IOrders[]>) => {
        ordersAdapter.addMany(state, action.payload)
      }
    )
  },
})
export const ordersSelector = ordersAdapter.getSelectors(
  (state: RootState) => state.orders
)
export const { actions } = ordersSlice
export default ordersSlice.reducer
