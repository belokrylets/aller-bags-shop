import React from "react"
import { Button } from "react-bootstrap"

interface AddingBlockProps {
  title: string
  handleButton: () => void
}

const AddingBlock: React.FC<AddingBlockProps> = ({ title, handleButton }) => {
  return (
    <div className="adding__block">
      <div className="adding__block__title">{title}</div>
      <div className="adding__block__button">
        <Button onClick={handleButton}>Добавить</Button>
      </div>
    </div>
  )
}

export default AddingBlock
