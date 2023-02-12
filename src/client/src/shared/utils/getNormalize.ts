import { normalize, schema } from "normalizr"
import { IBasket } from "store/reducers/basketSlice/basket.modal"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import { IProducts } from "store/reducers/productsSlice/products.modal"

interface NormalizeProduct {
  products: { [key: string]: IProducts }
  imagesIds: { [key: string]: IImages }
}

export const getNormalizeProduct = (data: IProducts[]): NormalizeProduct => {
  const image = new schema.Entity<IImages>("imagesIds")
  const product = new schema.Entity<IProducts>("products", {
    imagesIds: [image],
  })
  const normalizedData = normalize(data, [product])!
  const result: NormalizeProduct = {
    products: normalizedData.entities.products!,
    // @ts-ignore
    imagesIds: normalizedData.entities.imagesIds!,
  }

  return result
}
