import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async (_, thunkApi) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/categories",
      })

      const categories = response.data
      return categories
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
