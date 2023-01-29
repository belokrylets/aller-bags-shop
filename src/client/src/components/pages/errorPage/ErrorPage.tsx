import { links } from "helpers/navbarLinks"
import React from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <main className="error">
      <h1>Страница не найдена</h1>
      <Button onClick={() => navigate(links.home.path)}>
        Вернуться на главную
      </Button>
    </main>
  )
}

export default ErrorPage
