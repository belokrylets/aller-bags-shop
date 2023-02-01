import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState } from "store/store"
import { getImagesNormalized } from "shared/utils/getNormalized"
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
      (state, action: PayloadAction<IImages>) => {
        const normalizedCategories = getImagesNormalized(action.payload)
        imagesAdapter.addMany(state, normalizedCategories!)
      }
    )
  },
})
export const imagesSelector = imagesAdapter.getSelectors(
  (state: RootState) => state.images
)
export const { actions } = imagesSlice
export default imagesSlice.reducer
