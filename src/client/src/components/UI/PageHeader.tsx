import { links } from "helpers/navbarLinks"
import React from "react"
import { Breadcrumb, Container } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="page__header">
      <div className="page__header__breadсrumbs">
        <Link className="breadсrumbs__link" to={links.home.path}>
          Главная
        </Link>
        {" / "}
        <span className="breadсrumbs__link">{title}</span>
      </div>
      <h4 className="page__header__title">{title}</h4>
    </div>
  )
}

export default PageHeader
