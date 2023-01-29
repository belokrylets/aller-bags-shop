import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { IFiltersOptions } from "./Products"
import { IProducts } from "store/reducers/productsSlice/products.modal"
interface SortingProps {
  filtersOptions: IFiltersOptions
  setFiltersOptions: React.Dispatch<React.SetStateAction<IFiltersOptions>>
}
const Sorting: React.FC<SortingProps> = ({
  filtersOptions,
  setFiltersOptions,
}) => {
  const [sorting, setSorting] = useState<{ price: string; title: string }>({
    price: "",
    title: "",
  })

  useEffect(() => {
    if (sorting.price) {
      if (sorting.price === "ascending") {
        const sortCallback = (a: IProducts, b: IProducts) => a.price - b.price
        setFiltersOptions({
          ...filtersOptions,
          sort: { ...filtersOptions.sort, price: sortCallback },
        })
      } else {
        const sortCallback = (a: IProducts, b: IProducts) => b.price - a.price
        setFiltersOptions({
          ...filtersOptions,
          sort: { ...filtersOptions.sort, price: sortCallback },
        })
      }
    }
    if (sorting.title) {
      if (sorting.title === "ascending") {
        const sortCallback = (a: IProducts, b: IProducts) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        }
        setFiltersOptions({
          ...filtersOptions,
          sort: { ...filtersOptions.sort, title: sortCallback },
        })
      } else {
        const sortCallback = (b: IProducts, a: IProducts) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        }
        setFiltersOptions({
          ...filtersOptions,
          sort: { ...filtersOptions.sort, title: sortCallback },
        })
      }
    }
  }, [sorting])

  return (
    <div className="sort__tab">
      <span>Сортировать:</span>
      <div
        onClick={() => {
          if (sorting.price === "ascending") {
            setSorting({ title: "", price: "descending" })
          } else {
            setSorting({ title: "", price: "ascending" })
          }
        }}
        className="sort__item"
      >
        <span>По цене</span>
        {sorting.price === "ascending" ? (
          <Icon icon="ic:baseline-keyboard-arrow-up" width="20" height="20" />
        ) : (
          <Icon icon="ic:baseline-keyboard-arrow-down" width="20" height="20" />
        )}
      </div>

      <div
        onClick={() => {
          if (sorting.title === "ascending") {
            setSorting({ price: "", title: "descending" })
          } else {
            setSorting({ price: "", title: "ascending" })
          }
        }}
        className="sort__item"
      >
        <span>По названию</span>
        {sorting.title === "ascending" ? (
          <Icon icon="ic:baseline-keyboard-arrow-up" width="20" height="20" />
        ) : (
          <Icon icon="ic:baseline-keyboard-arrow-down" width="20" height="20" />
        )}
      </div>
    </div>
  )
}

export default Sorting
