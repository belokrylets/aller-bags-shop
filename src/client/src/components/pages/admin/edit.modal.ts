import { ICategories } from "store/reducers/categoriesSlice/categories.modal"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import { IUser } from "store/reducers/userSlice/user.modal"

export interface EditProps {
  mode: string
  show: boolean
  handleClose: () => void
  selectedValue: ICategories
  setState: React.Dispatch<React.SetStateAction<ColorGenderCategoryState>>
}
export interface ColorGenderCategoryState {
  id: string
  name: string
  translate: string
}

export interface ProductState {
  id: string
  name: string
  slug: string
  price: number
  size: string
  description: string
  colorId: string
  genderId: string
  imagesIds: string[]
  categoryId: string
}
export interface ISelectOptions {
  color: IColors
  gender: IGenders
  category: ICategories
  image: IImages
}
