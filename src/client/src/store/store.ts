import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./reducers/modalSlice"
import categoriesReducer from "./reducers/categoriesSlice/categoriesSlice"
import colorsReducer from "./reducers/colorsSlice/colorsSlice"
import gendersReducer from "./reducers/gendersSlice/gendersSlice"
import imagesReducer from "./reducers/imagesSlice/imagesSlice"
import productsReducer from "./reducers/productsSlice/productsSlice"
import userReducer from "./reducers/userSlice/userSlice"
import ordersReducer from "./reducers/ordersSlice/ordersSlice"
import ordersSuccessReducer from "./reducers/ordersSuccessSlice/ordersSuccessSlice"
import basketReducer from "./reducers/basketSlice/basketSlice"

const store = configureStore({
  reducer: {
    modal: modalReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
    genders: gendersReducer,
    images: imagesReducer,
    products: productsReducer,
    user: userReducer,
    orders: ordersReducer,
    ordersSuccess: ordersSuccessReducer,
    basket: basketReducer,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
