import { links } from "shared/helpers/navbarLinks"
import React from "react"
import { Link } from "react-router-dom"

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
