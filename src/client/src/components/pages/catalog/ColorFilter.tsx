import { useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { Accordion, Form } from "react-bootstrap"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import { colorsSelector } from "store/reducers/colorsSlice/colorsSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { IFiltersOptions } from "./Products"

interface ColorFilterProps {
  productsList: IProducts[]
  filtersOptions: IFiltersOptions
  setFiltersOptions: React.Dispatch<React.SetStateAction<IFiltersOptions>>
}
const ColorFilter: React.FC<ColorFilterProps> = ({
  filtersOptions,
  setFiltersOptions,
  productsList,
}) => {
  const allColors = useAppSelector(colorsSelector.selectAll)
  const allColorsEntities = useAppSelector(colorsSelector.selectEntities)

  const [checked, setChecked] = useState<string[]>([])
  const [colorsList, setColorsList] = useState<IColors[]>([])

  useEffect(() => {
    if (productsList) {
      const colorsId = productsList.map((product) => product.colorId)
      const uniqueId = Array.from(new Set(colorsId))

      const colorsListNew = uniqueId.map((id) => allColorsEntities[id]!)
      setColorsList(colorsListNew)
    } else {
      setColorsList(allColors)
    }
  }, [productsList])

  const handleCheckbox = (id: string) => {
    if (checked.includes(id)) {
      const newChecked = checked.filter((checkedId) => checkedId !== id)
      setChecked(newChecked)
      setFiltersOptions({ ...filtersOptions, colors: newChecked })
    } else {
      setChecked([...checked, id])
      setFiltersOptions({ ...filtersOptions, colors: [...checked, id] })
    }
  }
  return (
    <div className="color">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Цвет</Accordion.Header>
          <Accordion.Body>
            {colorsList.map(({ id, name, translate }) => (
              <Form.Check
                key={id}
                name="color"
                type="checkbox"
                label={name}
                checked={checked.includes(id)}
                onChange={() => handleCheckbox(id)}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ColorFilter
