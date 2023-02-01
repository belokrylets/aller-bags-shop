import { EntityState, Update } from "@reduxjs/toolkit"
import { IColors } from "store/reducers/colorsSlice/colors.modal"
import colorsReducer, { actions } from "store/reducers/colorsSlice/colorsSlice"

describe("testing colorsReducer", () => {
  test("testing adding color", () => {
    const initialState: EntityState<IColors> = {
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

    const newColor: IColors = {
      name: "testName4New",
      translate: "translate4New",
      id: "uuid4New",
    }

    expect(colorsReducer(initialState, actions.addColor(newColor))).toEqual(
      receivedState
    )
  })
  test("testing adding many colors", () => {
    const initialState: EntityState<IColors> = {
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

    const newColors: IColors[] = [
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
      colorsReducer(initialState, actions.addManyColors(newColors))
    ).toEqual(receivedState)
  })
  test("testing editing color", () => {
    const initialState: EntityState<IColors> = {
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

    const editedColor: Update<IColors> = {
      id: "uuid3",
      changes: {
        name: "testNameEdited3",
        translate: "translateEdited3",
        id: "uuid3",
      },
    }

    expect(
      colorsReducer(initialState, actions.updateColor(editedColor))
    ).toEqual(receivedState)
  })
  test("testing remove color", () => {
    const initialState: EntityState<IColors> = {
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
    expect(colorsReducer(initialState, actions.removeColor("uuid2"))).toEqual(
      receivedState
    )
  })
})
