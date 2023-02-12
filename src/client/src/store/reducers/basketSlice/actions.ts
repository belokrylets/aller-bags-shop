import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchBasket = createAsyncThunk(
  "basket/fetchBasket",
  async (basketId: string, thunkApi) => {
    try {
      const response = await $host.get(`api/basket/${basketId}`)
      console.log("response", response)
      const basket = response.data
      return basket
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
