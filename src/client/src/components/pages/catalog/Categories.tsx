import classNames from "classnames"
import { useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { categoriesSelector } from "store/reducers/categoriesSlice/categoriesSlice"

interface CategoriesProps {
  activeCategory: string
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>
}
const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const allCategories = useAppSelector(categoriesSelector.selectAll)

  const handleCategories = (id: string) => {
    setActiveCategory(id)
  }
  return (
    <div className="categories">
      <div
        onClick={() => handleCategories("")}
        className={classNames("categories__item", {
          active: "" === activeCategory,
        })}
      >
        Все товары
      </div>
      {allCategories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategories(category.id)}
          className={classNames("categories__item", {
            active: category.id === activeCategory,
          })}
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default Categories
