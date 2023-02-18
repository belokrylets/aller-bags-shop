import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { fetchAllOrdersSuccess } from "./actions"
import { IOrdersSuccess } from "./ordersSuccess.modal"

const ordersSuccessAdapter = createEntityAdapter<IOrdersSuccess>()

const initialState = ordersSuccessAdapter.getInitialState()

const ordersSuccessSlice = createSlice({
  name: "ordersSuccess",
  initialState,
  reducers: {
    removeOrder: ordersSuccessAdapter.removeOne,
    addManyOrders: ordersSuccessAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllOrdersSuccess.fulfilled,
      (state, action: PayloadAction<IOrdersSuccess[]>) => {
        ordersSuccessAdapter.addMany(state, action.payload)
      }
    )
  },
})
export const ordersSelector = ordersSuccessAdapter.getSelectors(
  (state: RootState) => state.ordersSuccess
)
export const { actions } = ordersSuccessSlice
export default ordersSuccessSlice.reducer
