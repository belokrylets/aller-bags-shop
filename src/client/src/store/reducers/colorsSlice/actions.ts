import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllColors = createAsyncThunk(
  "colors/fetchAllColors",
  async (_, thunkApi) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/color",
      })

      const colors = response.data
      return colors
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
