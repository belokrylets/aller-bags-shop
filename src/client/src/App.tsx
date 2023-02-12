import { check } from "api/userApi"
import About from "components/pages/about/About"
import Admin from "components/pages/admin/Admin"
import UsersList from "components/pages/admin/user/UsersList"
import Catalog from "components/pages/catalog/Catalog"
import SelectedProduct from "components/pages/catalog/SelectedProduct"
import ErrorPage from "components/pages/errorPage/ErrorPage"
import Home from "components/pages/home/Home"
import AuthorizationModal from "components/UI/AuthorizationModal"
import Footer from "components/UI/Footer"
import IndividualModal from "components/UI/IndividualModal"
import NavBars from "components/UI/NavBars"
import { links } from "shared/helpers/navbarLinks"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useEffect, useLayoutEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { fetchAllCategories } from "store/reducers/categoriesSlice/actions"
import { fetchAllColors } from "store/reducers/colorsSlice/actions"
import { fetchAllGenders } from "store/reducers/gendersSlice/actions"
import { fetchAllImages } from "store/reducers/imagesSlice/actions"
import { fetchAllProducts } from "store/reducers/productsSlice/actions"
import { actions } from "store/reducers/userSlice/userSlice"
import Profile from "components/pages/profile/Profile"
import Basket from "components/pages/basket/Basket"
import { fetchBasket } from "store/reducers/basketSlice/actions"

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllColors())
    dispatch(fetchAllGenders())
    check().then((data: any) => {
      console.log("data", data)
      const isAdmin = data.roles === "ADMIN" ? true : false
      dispatch(fetchBasket(data.basketId))
      dispatch(actions.isAdminChange(isAdmin))
      dispatch(actions.isAuthChange(true))
      dispatch(actions.userChange(data.email))
    })
    dispatch(fetchAllProducts())
  }, [])

  const { isAdmin } = useAppSelector((state) => state.user)

  return (
    <BrowserRouter>
      <NavBars />
      <AuthorizationModal />
      <IndividualModal />
      <Routes>
        <Route path={links.home.path} element={<Home />} />
        <Route path={links.catalog.path} element={<Catalog />} />
        <Route path={links.about.path} element={<About />} />
        <Route path={links.profile.path} element={<Profile />} />
        <Route path={links.basket.path} element={<Basket />} />

        <Route path={links.menuItem.path} element={<UsersList />} />
        <Route
          path={links.selectedProduct.path}
          element={<SelectedProduct />}
        />
        {isAdmin ? (
          <Route path={links.admin.path} element={<Admin />} />
        ) : (
          <Route
            path={links.admin.path}
            element={<Navigate replace to={links.home.path} />}
          />
        )}
        <Route path={links.errorPage.path} element={<ErrorPage />} />
        <Route
          path={"*"}
          element={<Navigate replace to={links.errorPage.path} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
