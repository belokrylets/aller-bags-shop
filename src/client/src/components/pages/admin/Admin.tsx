import PageHeader from "components/UI/PageHeader"
import { useAppDispatch } from "hooks/redux"
import React, { useLayoutEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { fetchAllImages } from "store/reducers/imagesSlice/actions"
import { fetchAllOrders } from "store/reducers/ordersSlice/actions"
import { fetchAllUsers } from "store/reducers/userSlice/actions"
import Lists from "./Lists"
import Menu from "./Menu"

const Admin = () => {
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllOrders())
    dispatch(fetchAllImages())
  }, [])

  const [activeMenuItem, setActiveMenuItem] = useState<string>("products")
  return (
    <main className="admin">
      <Container fluid="xxl">
        <PageHeader title="Админ панель" />
        <div className="admin__content">
          <Row>
            <Col sm={3}>
              <Menu
                activeMenuItem={activeMenuItem}
                setActiveMenuItem={setActiveMenuItem}
              />
            </Col>
            <Col sm={9}>
              <div className="lists">
                <Lists menuItem={activeMenuItem} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  )
}

export default Admin
