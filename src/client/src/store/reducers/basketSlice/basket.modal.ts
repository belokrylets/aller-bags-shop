export interface IBasketProducts {
  id: string
  basketId: string
  productId: string
}
export interface IBasket {
  id: string
  userId: string
  products: IBasketProducts[]
}
