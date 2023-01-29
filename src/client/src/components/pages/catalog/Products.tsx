import { useAppSelector } from "hooks/redux"
import React, { useEffect, useState } from "react"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import { productsSelector } from "store/reducers/productsSlice/productsSlice"
import ColorFilter from "./ColorFilter"
import GenderFilter from "./GenderFilter"
import PriceFilter from "./PriceFilter"
import ProductList from "./ProductList"
import Sorting from "./Sorting"

export interface ProductsProps {
  activeCategory: string
}

export interface IFiltersOptions {
  genders: string[]
  colors: string[]
  price: { min: number; max: number }
  sort: {
    price: ((a: IProducts, b: IProducts) => number) | undefined
    title: ((a: IProducts, b: IProducts) => number) | undefined
  }
}
const Products: React.FC<ProductsProps> = ({ activeCategory }) => {
  const allProducts = useAppSelector(productsSelector.selectAll)
  const [productsList, setProductsList] = useState<IProducts[]>(allProducts)
  const [filtersOptions, setFiltersOptions] = useState<IFiltersOptions>({
    colors: [],
    genders: [],
    price: { min: 0, max: 10000000000 },
    sort: { price: undefined, title: undefined },
  })

  useEffect(() => {
    setProductsList(allProducts)
  }, [allProducts.length])

  useEffect(() => {
    const filteredProducts = allProducts
      .filter((product) => product.categoryId.includes(activeCategory))
      .filter((product) =>
        filtersOptions.colors.length
          ? filtersOptions.colors.includes(product.colorId)
          : true
      )
      .filter((product) =>
        filtersOptions.genders.length
          ? filtersOptions.genders.includes(product.genderId)
          : true
      )
      .filter(
        (product) =>
          product.price >= filtersOptions.price.min &&
          product.price <= filtersOptions.price.max
      )
      .sort(filtersOptions.sort.price)
      .sort(filtersOptions.sort.title)
    setProductsList(filteredProducts)
  }, [
    activeCategory,
    filtersOptions.colors.length,
    filtersOptions.genders.length,
    filtersOptions.price.max,
    filtersOptions.price.min,
    filtersOptions.sort.price,
    filtersOptions.sort.title,
  ])

  return (
    <div className="products">
      <div className="filter__tab">
        <ColorFilter
          filtersOptions={filtersOptions}
          setFiltersOptions={setFiltersOptions}
          productsList={productsList}
        />
        <PriceFilter
          filtersOptions={filtersOptions}
          setFiltersOptions={setFiltersOptions}
        />
        <GenderFilter
          productsList={productsList}
          filtersOptions={filtersOptions}
          setFiltersOptions={setFiltersOptions}
        />
      </div>
      <Sorting
        filtersOptions={filtersOptions}
        setFiltersOptions={setFiltersOptions}
      />
      <ProductList productsList={productsList} />
    </div>
  )
}

export default Products
