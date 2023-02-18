import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import logo from "assets/media/logo.png"
import { links } from "shared/helpers/navbarLinks"
import { Icon } from "@iconify/react"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { actions as modalActions } from "store/reducers/modalSlice"
import { actions as userActions } from "store/reducers/userSlice/userSlice"
import classNames from "classnames"
import {
  basketSelector,
  actions as basketActions,
} from "store/reducers/basketSlice/basketSlice"

const NavBars: React.FC = () => {
  const [isShown, setIsShown] = useState(false)
  const basketProducts = useAppSelector(basketSelector.selectAll)
  const navigate = useNavigate()
  useEffect(() => {
    document.addEventListener("click", () => setIsShown(false))
    return () => document.removeEventListener("click", () => setIsShown(false))
  }, [])

  const dispatch = useAppDispatch()
  const loginButton = () => {
    if (isAuth) {
      localStorage.setItem("token", "")
      dispatch(userActions.logout())
      dispatch(basketActions.removeAllProducts())
    } else {
      dispatch(modalActions.changeMode("login"))
    }
    setIsShown(false)
  }
  const navigateHandle = (path: string) => {
    navigate(path)
  }
  const individualButton = () => {
    setIsShown(false)
    dispatch(modalActions.changeMode("individual"))
  }
  const { isAuth, isAdmin } = useAppSelector((state) => state.user)
  return (
    <header className='navbars' onClick={(e) => e.stopPropagation()}>
      <Navbar bg='light' expand='lg'>
        <Container fluid='xxl'>
          <Navbar.Brand onClick={() => setIsShown(false)}>
            <Link to={links.home.path}>
              <img
                src={logo}
                width='130'
                height='60'
                className='d-inline-block align-top'
                alt='React Bootstrap logo'
              />
            </Link>
          </Navbar.Brand>
          <div className='burger__button'>
            <div className='basket__logo__mobile'>
              <div className='basket__counter'>{basketProducts.length}</div>
              <Icon
                onClick={() => {
                  setIsShown(false)
                  navigateHandle(links.basket.path)
                }}
                icon='cil:basket'
                width='28'
                height='28'
              />
            </div>
            {isShown ? (
              <Icon
                icon='ic:baseline-close'
                color='#d19e66'
                width='30'
                height='30'
                onClick={() => setIsShown(!isShown)}
              />
            ) : (
              <Icon
                icon='pajamas:hamburger'
                width='30'
                color='#d19e66'
                height='30'
                onClick={() => setIsShown(!isShown)}
              />
            )}
          </div>
          <Navbar.Collapse
            id='navbarScroll'
            className={classNames({ show: isShown })}>
            <Nav className='me-auto my-2 my-lg-0' navbarScroll>
              <div className='login__mobile' onClick={loginButton}>
                <Icon
                  icon='material-symbols:account-circle'
                  width='30'
                  height='30'
                />
                {isAuth ? "Выйти" : "Авторизоваться"}
              </div>
              <Link
                onClick={() => setIsShown(!isShown)}
                className='nav-link'
                to={links.catalog.path}>
                {links.catalog.title}
              </Link>
              <Link
                onClick={() => setIsShown(!isShown)}
                className='nav-link'
                to={links.about.path}>
                {links.about.title}
              </Link>
              <div onClick={individualButton} className='nav-link'>
                Индивидуальный пошив
              </div>

              {isAdmin ? (
                <Link
                  onClick={() => setIsShown(!isShown)}
                  className='nav-link'
                  to={links.admin.path}>
                  Админка
                </Link>
              ) : null}
              {isAuth && (
                <Link
                  onClick={() => setIsShown(!isShown)}
                  className='nav-link profile__mobile'
                  to={links.profile.path}>
                  {links.profile.title}
                </Link>
              )}
            </Nav>
            <div className='ms-3'>
              <a className='phone' href='tel:+79213995539'>
                +7 (921) 399 55 39
              </a>
            </div>
            {isAuth && (
              <div
                onClick={() => navigateHandle(links.profile.path)}
                className='profile__logo'>
                <Icon icon='iconoir:profile-circle' width='30' height='30' />
              </div>
            )}
            <div
              onClick={() => navigateHandle(links.basket.path)}
              className='basket__logo'>
              <div className='basket__counter'>{basketProducts.length}</div>
              <Icon icon='cil:basket' width='28' height='28' />
            </div>
            <div onClick={loginButton} className='auth__logo'>
              {isAuth ? (
                <Icon icon='ph:sign-out-duotone' width='35' height='35' />
              ) : (
                <Icon icon='ph:sign-in-duotone' width='35' height='35' />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBars
