import { createAsyncThunk } from "@reduxjs/toolkit"
import { $authHost } from "api"
import getProductsIds from "shared/utils/getProductsIds"
import { IOrdersSuccess } from "./ordersSuccess.modal"

export const fetchAllOrdersSuccess = createAsyncThunk(
  "ordersSuccess/fetchAllOrdersSuccess",
  async (_, thunkApi) => {
    try {
      const response = await $authHost.get("api/ordersSuccess")
      const orders = response.data
      const newOrders = orders.map((order: any) => {
        const ids = getProductsIds(order.productsIds)
        return {
          ...order,
          productsIds: ids,
        }
      })

      return newOrders
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
