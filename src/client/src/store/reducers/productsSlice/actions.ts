import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, thunkApi) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/product",
      })

      const products = response.data.rows
      return products
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
