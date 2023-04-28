import { EntityState, Update } from "@reduxjs/toolkit"
import { IProducts } from "store/reducers/productsSlice/products.modal"
import productsReducer, {
  actions,
} from "store/reducers/productsSlice/productsSlice"

describe("testing productsReducer", () => {
  test("testing adding product", () => {
    const initialState: EntityState<IProducts> = {
      ids: ["uuid1"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid2New"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
        uuid2New: {
          id: "uuid2New",
          price: 0,
          size: "productNew",
          description: "productNew",
          colorId: "productNew",
          genderId: "productNew",
          categoryId: "productNew",
          imageId: "productNew",
          name: "productNew",
          slug: "productNew",
        },
      },
    }

    const newProduct: IProducts = {
      id: "uuid2New",
      price: 0,
      size: "productNew",
      description: "productNew",
      colorId: "productNew",
      genderId: "productNew",
      categoryId: "productNew",
      imageId: "productNew",
      name: "productNew",
      slug: "productNew",
    }

    expect(
      productsReducer(initialState, actions.addProduct(newProduct))
    ).toEqual(receivedState)
  })
  test("testing adding many AdminProductsList", () => {
    const initialState: EntityState<IProducts> = {
      ids: ["uuid1"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuidNew2", "uuidNew3"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
        uuidNew2: {
          id: "uuidNew2",
          price: 0,
          size: "productNew2",
          description: "productNew2",
          colorId: "productNew2",
          genderId: "productNew2",
          categoryId: "productNew2",
          imageId: "productNew2",
          name: "productNew2",
          slug: "productNew2",
        },
        uuidNew3: {
          id: "uuidNew3",
          price: 0,
          size: "productNew3",
          description: "productNew3",
          colorId: "productNew3",
          genderId: "productNew3",
          categoryId: "productNew3",
          imageId: "productNew3",
          name: "productNew3",
          slug: "productNew3",
        },
      },
    }

    const newProducts: IProducts[] = [
      {
        id: "uuidNew2",
        price: 0,
        size: "productNew2",
        description: "productNew2",
        colorId: "productNew2",
        genderId: "productNew2",
        categoryId: "productNew2",
        imageId: "productNew2",
        name: "productNew2",
        slug: "productNew2",
      },
      {
        id: "uuidNew3",
        price: 0,
        size: "productNew3",
        description: "productNew3",
        colorId: "productNew3",
        genderId: "productNew3",
        categoryId: "productNew3",
        imageId: "productNew3",
        name: "productNew3",
        slug: "productNew3",
      },
    ]

    expect(
      productsReducer(initialState, actions.addManyProducts(newProducts))
    ).toEqual(receivedState)
  })
  test("testing editing product", () => {
    const initialState: EntityState<IProducts> = {
      ids: ["uuid1"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
      },
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "productEdited",
          description: "productEdited",
          colorId: "productEdited",
          genderId: "productEdited",
          categoryId: "productEdited",
          imageId: "productEdited",
          name: "productEdited",
          slug: "productEdited",
        },
      },
    }

    const editedProduct: Update<IProducts> = {
      id: "uuid1",
      changes: {
        id: "uuid1",
        price: 0,
        size: "productEdited",
        description: "productEdited",
        colorId: "productEdited",
        genderId: "productEdited",
        categoryId: "productEdited",
        imageId: "productEdited",
        name: "productEdited",
        slug: "productEdited",
      },
    }

    expect(
      productsReducer(initialState, actions.updateProduct(editedProduct))
    ).toEqual(receivedState)
  })
  test("testing remove product", () => {
    const initialState: EntityState<IProducts> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
        uuid2: {
          id: "uuid2",
          price: 0,
          size: "product2",
          description: "product2",
          colorId: "product2",
          genderId: "product2",
          categoryId: "product2",
          imageId: "product2",
          name: "product2",
          slug: "product2",
        },
      },
    }
    const receivedState = {
      ids: ["uuid1"],
      entities: {
        uuid1: {
          id: "uuid1",
          price: 0,
          size: "product1",
          description: "product1",
          colorId: "product1",
          genderId: "product1",
          categoryId: "product1",
          imageId: "product1",
          name: "product1",
          slug: "product1",
        },
      },
    }
    expect(
      productsReducer(initialState, actions.removeProduct("uuid2"))
    ).toEqual(receivedState)
  })
})
