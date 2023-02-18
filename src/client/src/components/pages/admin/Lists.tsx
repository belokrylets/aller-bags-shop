import React from "react"
import AdminCategoriesList from "./categiries/AdminCategoriesList"
import AdminColorLists from "./colors/AdminColorList"
import AdminGenderList from "./gender/AdminGenderList"
import AdminImages from "./images/AdminImages"
import AdminOrdersList from "./orders/AdminOrdersList"
import OrdersSuccessList from "./ordersSuccess/OrdersSuccessList"
import AdminProductsList from "./products/AdminProductsList"
import UsersList from "./user/UsersList"

interface ListsProps {
  menuItem: string
}

const Lists: React.FC<ListsProps> = ({ menuItem }) => {
  switch (menuItem) {
    case "products":
      return <AdminProductsList />
    case "categories":
      return <AdminCategoriesList />
    case "color":
      return <AdminColorLists />
    case "gender":
      return <AdminGenderList />
    case "images":
      return <AdminImages />
    case "users":
      return <UsersList />
    case "orders":
      return <AdminOrdersList />
    case "ordersSuccess":
      return <OrdersSuccessList />
    default:
      return <OrdersSuccessList />
  }
}

export default Lists
