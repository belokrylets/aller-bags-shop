export interface IThumbnails {
  origin: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
  e_150x150: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
  w_500: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
  h_500: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
  w_300: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
  w_400: {
    name: string
    parentId: string
    path: string
    thumbnails: string
    id: string
  }
}

export interface IImages {
  id: string
  name: string
  thumbnails: IThumbnails
}
