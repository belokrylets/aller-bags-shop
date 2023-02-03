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

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL)
  useLayoutEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
    dispatch(fetchAllColors())
    dispatch(fetchAllGenders())
    dispatch(fetchAllImages())
  }, [])

  useEffect(() => {
    check().then((data: any) => {
      const isAdmin = data.roles === "ADMIN" ? true : false
      dispatch(actions.isAdminChange(isAdmin))
      dispatch(actions.isAuthChange(true))
      dispatch(actions.userChange(data.email))
    })
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
