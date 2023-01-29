import { useAppSelector } from "hooks/redux"
import { useEffect, useState } from "react"
import { Accordion, Form } from "react-bootstrap"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import { gendersSelector } from "store/reducers/gendersSlice/gendersSlice"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { IFiltersOptions } from "./Products"

interface GenderFilterProps {
  productsList: IProducts[]
  filtersOptions: IFiltersOptions
  setFiltersOptions: React.Dispatch<React.SetStateAction<IFiltersOptions>>
}

const GenderFilter: React.FC<GenderFilterProps> = ({
  filtersOptions,
  setFiltersOptions,
  productsList,
}) => {
  const allGender = useAppSelector(gendersSelector.selectAll)
  const allGenderEntities = useAppSelector(gendersSelector.selectEntities)
  const [checked, setChecked] = useState<string[]>([])
  const [gendersList, setGendersList] = useState<IGenders[]>([])

  useEffect(() => {
    if (productsList) {
      const gendersId = productsList.map((product) => product.genderId)
      const uniqueId = Array.from(new Set(gendersId))

      const gendersListNew = uniqueId.map((id) => allGenderEntities[id]!)
      setGendersList(gendersListNew)
    } else {
      setGendersList(allGender)
    }
  }, [productsList])

  const handleCheckbox = (id: string) => {
    if (checked.includes(id)) {
      const newChecked = checked.filter((checkedId) => checkedId !== id)
      setChecked(newChecked)
      setFiltersOptions({ ...filtersOptions, genders: newChecked })
    } else {
      setChecked([...checked, id])
      setFiltersOptions({ ...filtersOptions, genders: [...checked, id] })
    }
  }

  return (
    <div className="gender">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Пол</Accordion.Header>
          <Accordion.Body>
            {gendersList.map(({ id, name, translate }) => (
              <Form.Check
                key={id}
                name="gender"
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

export default GenderFilter
