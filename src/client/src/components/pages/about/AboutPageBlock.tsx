import React from "react"

interface AboutPageBlockProps {
  title: string
  children: React.ReactNode
}

const AboutPageBlock: React.FC<AboutPageBlockProps> = ({ title, children }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  )
}

export default AboutPageBlock
