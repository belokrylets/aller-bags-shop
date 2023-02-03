import React from "react"
import { Carousel, Image } from "react-bootstrap"
import { useAppSelector } from "hooks/redux"
import { imagesSelector } from "store/reducers/imagesSlice/imagesSlice"

interface CarouselImgProps {
  imagesId: string[]
}

const CarouselImg: React.FC<CarouselImgProps> = ({ imagesId }) => {
  const allImages = useAppSelector(imagesSelector.selectEntities)
  const images: string[] = imagesId.map(
    (id) => `http://188.68.223.243/${allImages[id]?.name}`
  )
  return (
    <div className="carousel">
      <Carousel>
        {images.map((image) => (
          <Carousel.Item className="d-flex justify-content-center" key={image}>
            <Image height={450} src={image} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselImg
