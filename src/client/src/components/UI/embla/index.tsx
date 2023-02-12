import { url } from "api"
import { EmblaOptionsType } from "embla-carousel-react"
import { useAppSelector } from "hooks/redux"
import React from "react"
import { imagesSelector } from "store/reducers/imagesSlice/imagesSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import EmblaCarousel from "./EmblaCarousel"

interface EmblaProps {
  slides: IProducts[]
}

const Embla: React.FC<EmblaProps> = React.memo(({ slides }) => {
  const options: EmblaOptionsType = { loop: true }

  return <EmblaCarousel slides={slides} options={options} />
})

export default Embla
