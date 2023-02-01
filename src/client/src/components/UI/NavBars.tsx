import React from "react"
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "assets/media/logo.png"
import { links } from "shared/helpers/navbarLinks"
import { Icon } from "@iconify/react"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { actions as modalActions } from "store/reducers/modalSlice"
import { actions as userActions } from "store/reducers/userSlice/userSlice"

const NavBars: React.FC = () => {
  const dispatch = useAppDispatch()
  const loginButton = () => {
    if (isAuth) {
      localStorage.setItem("token", "")
      dispatch(userActions.logout())
    } else {
      dispatch(modalActions.changeMode("login"))
    }
  }
  const individualButton = () => {
    dispatch(modalActions.changeMode("individual"))
  }

  const { isAuth, isAdmin } = useAppSelector((state) => state.user)
  return (
    <header className="navbars">
      <Navbar bg="light" expand="lg">
        <Container fluid="xxl">
          <Navbar.Brand>
            <Link to={links.home.path}>
              <img
                src={logo}
                width="130"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to={links.catalog.path}>
                {links.catalog.title}
              </Link>
              <Link className="nav-link" to={links.about.path}>
                {links.about.title}
              </Link>
              <div onClick={individualButton} className="nav-link">
                Индивидуальный пошив
              </div>

              {isAdmin ? (
                <Link className="nav-link" to={links.admin.path}>
                  Админка
                </Link>
              ) : null}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Поиск по каталогу..."
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <div className="ms-3">
              <a className="phone" href="tel:+79213995539">
                +7 (921) 399 55 39
              </a>
            </div>
            <div onClick={loginButton} className="auth__logo">
              {isAuth ? (
                <Icon icon="mdi:logout" width="35" height="35" />
              ) : (
                <Icon icon="mdi:login" width="35" height="35" />
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBars
