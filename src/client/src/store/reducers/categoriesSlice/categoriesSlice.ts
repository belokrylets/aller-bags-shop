import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getCategoriesNormalized } from "utils/getNormalized"
import { fetchAllCategories } from "./actions"
import { ICategories } from "./categories.modal"

const categoriesAdapter = createEntityAdapter<ICategories>()

const initialState = categoriesAdapter.getInitialState()

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: categoriesAdapter.addOne,
    updateCategory: categoriesAdapter.updateOne,
    removeCategory: categoriesAdapter.removeOne,
    addManyCategory: categoriesAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllCategories.fulfilled,
      (state, action: PayloadAction<ICategories>) => {
        const normalizedCategories = getCategoriesNormalized(action.payload)
        categoriesAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})
export const categoriesSelector = categoriesAdapter.getSelectors(
  (state: RootState) => state.categories
)
export const { actions } = categoriesSlice
export default categoriesSlice.reducer
