import React, { useState } from "react"
import { Carousel, Image } from "react-bootstrap"
import { useAppSelector } from "hooks/redux"
import { url } from "api"
import { productsImagesSelector } from "store/reducers/productsSlice/productsSlice"

interface CarouselImgProps {
  imagesId: string[]
}

const CarouselImg: React.FC<CarouselImgProps> = ({ imagesId }) => {
  const [index, setIndex] = useState<number>(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }
  const allImages = useAppSelector(productsImagesSelector.selectEntities)
  const images: string[] = imagesId.map(
    (id) => `${url}${allImages[id]?.thumbnails.h_500.path}`
  )
  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image) => (
          <Carousel.Item className="carousel__item" key={image}>
            <Image className="carousel__images" src={image} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselImg
