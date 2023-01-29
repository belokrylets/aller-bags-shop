import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllGenders = createAsyncThunk(
  "genders/fetchAllGenders",
  async (_, thunkApi) => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/gender",
      })

      const genders = response.data
      return genders
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
