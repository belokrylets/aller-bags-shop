import { useAppSelector } from "hooks/redux"
import { Accordion } from "react-bootstrap"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import { Icon } from "@iconify/react"
import { useState } from "react"
import { IFiltersOptions } from "./Products"

interface PriceFilterProps {
  filtersOptions: IFiltersOptions
  setFiltersOptions: React.Dispatch<React.SetStateAction<IFiltersOptions>>
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  filtersOptions,
  setFiltersOptions,
}) => {
  const allProducts = useAppSelector(productsSelector.selectAll)
  const prices = allProducts
    .map((product) => product.price)
    .sort((a, b) => a - b)

  const [price, setPrice] = useState<{
    min: number
    max: number
  }>({
    min: 0,
    max: 0,
  })

  const handlePrice = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setPrice({ ...price, [name]: Number(value) })
    setFiltersOptions({
      ...filtersOptions,
      price: { ...filtersOptions.price, [name]: Number(value) },
    })
  }
  return (
    <div className="price">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Цена</Accordion.Header>
          <Accordion.Body>
            <div className="priceInput">
              <input
                name="min"
                type="number"
                placeholder={`${prices.at(0)!}`}
                onChange={(e) => handlePrice(e)}
              />
              <Icon icon="bi:dash-lg" />
              <input
                name="max"
                type="number"
                placeholder={`${prices.at(-1)!}`}
                onChange={(e) => handlePrice(e)}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default PriceFilter
