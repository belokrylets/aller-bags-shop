import { EntityState, Update } from "@reduxjs/toolkit"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"
import categoriesReducer, {
  actions,
} from "store/reducers/categoriesSlice/categoriesSlice"

describe("testing categoriesReducer", () => {
  test("testing adding category", () => {
    const initialState: EntityState<ICategories> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid2", "uuid3", "uuid4New"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
        uuid4New: {
          name: "testName4New",
          translate: "translate4New",
          id: "uuid4New",
        },
      },
    }

    const newCategory: ICategories = {
      name: "testName4New",
      translate: "translate4New",
      id: "uuid4New",
    }

    expect(
      categoriesReducer(initialState, actions.addCategory(newCategory))
    ).toEqual(receivedState)
  })
  test("testing adding many categories", () => {
    const initialState: EntityState<ICategories> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid2", "uuid3", "uuid4New", "uuid5New"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
        uuid4New: {
          name: "testName4New",
          translate: "translate4New",
          id: "uuid4New",
        },
        uuid5New: {
          name: "testName5New",
          translate: "translate5New",
          id: "uuid5New",
        },
      },
    }

    const newCategories: ICategories[] = [
      {
        name: "testName4New",
        translate: "translate4New",
        id: "uuid4New",
      },
      {
        name: "testName5New",
        translate: "translate5New",
        id: "uuid5New",
      },
    ]

    expect(
      categoriesReducer(initialState, actions.addManyCategory(newCategories))
    ).toEqual(receivedState)
  })
  test("testing editing category", () => {
    const initialState: EntityState<ICategories> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: {
          name: "testNameEdited3",
          translate: "translateEdited3",
          id: "uuid3",
        },
      },
    }

    const editedCategory: Update<ICategories> = {
      id: "uuid3",
      changes: {
        name: "testNameEdited3",
        translate: "translateEdited3",
        id: "uuid3",
      },
    }

    expect(
      categoriesReducer(initialState, actions.updateCategory(editedCategory))
    ).toEqual(receivedState)
  })
  test("testing remove category", () => {
    const initialState: EntityState<ICategories> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid2: { name: "testName2", translate: "translate2", id: "uuid2" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid3"],
      entities: {
        uuid1: { name: "testName1", translate: "translate1", id: "uuid1" },
        uuid3: { name: "testName3", translate: "translate3", id: "uuid3" },
      },
    }
    expect(
      categoriesReducer(initialState, actions.removeCategory("uuid2"))
    ).toEqual(receivedState)
  })
})
