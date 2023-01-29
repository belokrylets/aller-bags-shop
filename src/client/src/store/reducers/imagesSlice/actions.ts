import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async (_, thunkApi) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/images",
      })

      const images = response.data
      return images
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
