import AddingBlock from "components/UI/AddingBlock"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useState } from "react"
import { Image } from "react-bootstrap"
import * as imagesApi from "api/imagesApi"
import { IImages, IThumbnails } from "store/reducers/imagesSlice/images.modal"
import { actions, imagesSelector } from "store/reducers/imagesSlice/imagesSlice"
import EditImages from "./EditImage"
import { url } from "api"

const AdminImages = () => {
  const dispatch = useAppDispatch()

  const initialState: IImages = {
    id: "",
    name: "",
    thumbnails: {} as IThumbnails,
  }
  const images = useAppSelector(imagesSelector.selectAll)
  const [show, setShow] = useState<boolean>(false)
  const [mode, setMode] = useState<string>("")
  const [state, setState] = useState(initialState)

  const handleClose = () => {
    setShow(false)
    setState(initialState)
    setMode("")
  }
  const handleTableCLick = (images: IImages) => {
    setMode("edit")
    setState(images)
    setShow(true)
  }
  const handleAddingCLick = () => {
    setMode("add")
    setShow(true)
  }

  const handleDelete = async (id: string, fileName: string) => {
    if (window.confirm("Удалить изображение?")) {
      const deletedId = await imagesApi.deleting(id, fileName)
      dispatch(actions.removeImage(deletedId))
    }
  }
  return (
    <>
      <EditImages handleClose={handleClose} mode={mode} show={show} />
      <AddingBlock
        title="Добавить изображение"
        handleButton={handleAddingCLick}
      />
      <div className="images_list">
        {images.map((image) => (
          <div className="images_item">
            <Image
              onClick={() => handleDelete(image.id, image.name)}
              key={image.id}
              className="admin__image"
              src={`${url}${image.thumbnails.e_150x150.path}`}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default AdminImages
