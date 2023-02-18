import classNames from "classnames"
import React, { useState } from "react"

interface MenuProps {
  activeMenuItem: string
  setActiveMenuItem: React.Dispatch<React.SetStateAction<string>>
}

const Menu: React.FC<MenuProps> = ({ activeMenuItem, setActiveMenuItem }) => {
  return (
    <div className="categories">
      <div
        onClick={() => setActiveMenuItem("ordersSuccess")}
        className={classNames("categories__item", {
          active: "ordersSuccess" === activeMenuItem,
        })}
      >
        Заказы
      </div>
      <div
        onClick={() => setActiveMenuItem("products")}
        className={classNames("categories__item", {
          active: "products" === activeMenuItem,
        })}
      >
        Товары
      </div>
      <div
        onClick={() => setActiveMenuItem("categories")}
        className={classNames("categories__item", {
          active: "categories" === activeMenuItem,
        })}
      >
        Категории
      </div>
      <div
        onClick={() => setActiveMenuItem("color")}
        className={classNames("categories__item", {
          active: "color" === activeMenuItem,
        })}
      >
        Цвета
      </div>
      <div
        onClick={() => setActiveMenuItem("gender")}
        className={classNames("categories__item", {
          active: "gender" === activeMenuItem,
        })}
      >
        Пол
      </div>
      <div
        onClick={() => setActiveMenuItem("users")}
        className={classNames("categories__item", {
          active: "users" === activeMenuItem,
        })}
      >
        Пользователи
      </div>

      <div
        onClick={() => setActiveMenuItem("orders")}
        className={classNames("categories__item", {
          active: "orders" === activeMenuItem,
        })}
      >
        Заявки на пошив
      </div>

      <div
        onClick={() => setActiveMenuItem("images")}
        className={classNames("categories__item", {
          active: "images" === activeMenuItem,
        })}
      >
        Изображения
      </div>
    </div>
  )
}

export default Menu
