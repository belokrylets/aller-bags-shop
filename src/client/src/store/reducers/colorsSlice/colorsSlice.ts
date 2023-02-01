import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getColorsNormalized } from "shared/utils/getNormalized"
import { fetchAllColors } from "./actions"
import { IColors } from "./colors.modal"

const colorsAdapter = createEntityAdapter<IColors>()

const initialState = colorsAdapter.getInitialState()

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: colorsAdapter.addOne,
    updateColor: colorsAdapter.updateOne,
    removeColor: colorsAdapter.removeOne,
    addManyColors: colorsAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllColors.fulfilled,
      (state, action: PayloadAction<IColors>) => {
        const normalizedCategories = getColorsNormalized(action.payload)
        colorsAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})
export const colorsSelector = colorsAdapter.getSelectors(
  (state: RootState) => state.colors
)
export const { actions } = colorsSlice
export default colorsSlice.reducer
