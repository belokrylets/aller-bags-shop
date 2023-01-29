import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ModalState {
  mode: string
}

const initialState = {
  mode: "",
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload
    },
    resetMode: (state) => {
      state.mode = ""
    },
  },
})

export const { actions } = modalSlice
export default modalSlice.reducer
