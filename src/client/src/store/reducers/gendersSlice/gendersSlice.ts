import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getGendersNormalized } from "utils/getNormalized"
import { fetchAllGenders } from "./actions"
import { IGenders } from "./genders.modal"

const gendersAdapter = createEntityAdapter<IGenders>()

const initialState = gendersAdapter.getInitialState()

const gendersSlice = createSlice({
  name: "genders",
  initialState,
  reducers: {
    addGender: gendersAdapter.addOne,
    updateGender: gendersAdapter.updateOne,
    removeGender: gendersAdapter.removeOne,
    addManyGenders: gendersAdapter.addMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllGenders.fulfilled,
      (state, action: PayloadAction<IGenders>) => {
        const normalizedCategories = getGendersNormalized(action.payload)
        gendersAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})
export const gendersSelector = gendersAdapter.getSelectors(
  (state: RootState) => state.genders
)
export const { actions } = gendersSlice
export default gendersSlice.reducer
