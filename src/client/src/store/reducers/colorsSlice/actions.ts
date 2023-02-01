import { createAsyncThunk } from "@reduxjs/toolkit"
import { $host } from "api"

export const fetchAllColors = createAsyncThunk(
  "colors/fetchAllColors",
  async (_, thunkApi) => {
    try {
      const response = await $host.get("api/color")

      const colors = response.data
      return colors
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
