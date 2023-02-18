import React from "react"
import { Button } from "react-bootstrap"
import LoaderSpinner from "./LoaderSpinner"

interface ButtonWithLoaderProps {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isLoading: boolean
  isDisabled: boolean
}

const ButtonWithLoader: React.FC<ButtonWithLoaderProps> = ({
  children,
  isLoading,
  onClick,
  isDisabled,
}) => {
  return (
    <Button onClick={onClick} disabled={isDisabled}>
      {children}
      {isLoading && <LoaderSpinner />}
    </Button>
  )
}

export default ButtonWithLoader
