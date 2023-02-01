import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { fetchAllImages } from "./actions"
import { IImages } from "./images.modal"

const imagesAdapter = createEntityAdapter<IImages>()

const initialState = imagesAdapter.getInitialState()

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: imagesAdapter.addOne,
    updateImage: imagesAdapter.updateOne,
    removeImage: imagesAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllImages.fulfilled,
      (state, action: PayloadAction<IImages[]>) => {
        imagesAdapter.addMany(state, action.payload)
      }
    )
  },
})
export const imagesSelector = imagesAdapter.getSelectors(
  (state: RootState) => state.images
)
export const { actions } = imagesSlice
export default imagesSlice.reducer
