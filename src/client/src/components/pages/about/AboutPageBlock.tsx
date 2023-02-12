import React from "react"

interface AboutPageBlockProps {
  title: string
  children: React.ReactNode
}

const AboutPageBlock: React.FC<AboutPageBlockProps> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

export default AboutPageBlock
