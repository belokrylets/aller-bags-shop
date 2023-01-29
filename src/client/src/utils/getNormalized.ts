import { normalize, schema } from "normalizr"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { IUser } from "store/reducers/userSlice/user.modal"

export const getCategoriesNormalized = (data: ICategories) => {
  const category = new schema.Entity("categories")
  const normalizedData = normalize(data, [category])
  return normalizedData.entities.categories
}

export const getGendersNormalized = (data: IGenders) => {
  const gender = new schema.Entity("genders")
  const normalizedData = normalize(data, [gender])
  return normalizedData.entities.genders
}

export const getColorsNormalized = (data: IColors) => {
  const color = new schema.Entity("colors")
  const normalizedData = normalize(data, [color])
  return normalizedData.entities.colors
}

export const getImagesNormalized = (data: IImages) => {
  const image = new schema.Entity("images")
  const normalizedData = normalize(data, [image])
  return normalizedData.entities.images
}

export const getProductsNormalized = (data: IProducts) => {
  const product = new schema.Entity("products")
  const normalizedData = normalize(data, [product])
  return normalizedData.entities.products
}

export const getUsersNormalized = (data: IUser) => {
  const user = new schema.Entity("users")
  const normalizedData = normalize(data, [user])
  return normalizedData.entities.users
}
