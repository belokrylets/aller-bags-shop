import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllProducts = createAsyncThunk(
  "AdminProductsList/fetchAllProducts",
  async (_, thunkApi) => {
    try {
      const response = await $host.get(`api/product`)
      const products = response.data.rows
      return products
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
