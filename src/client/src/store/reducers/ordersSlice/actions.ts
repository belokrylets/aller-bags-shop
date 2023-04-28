import { createAsyncThunk } from "@reduxjs/toolkit"
import { $authHost } from "api"

export const fetchAllOrders = createAsyncThunk(
  "AdminOrdersList/fetchAllOrders",
  async (_, thunkApi) => {
    try {
      const response = await $authHost.get("api/orders")
      const orders = response.data
      return orders
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
