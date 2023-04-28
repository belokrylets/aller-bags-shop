import { EntityState, Update } from "@reduxjs/toolkit"
import { IGenders } from "store/reducers/gendersSlice/genders.modal"
import gendersReducer, {
  actions,
} from "store/reducers/gendersSlice/gendersSlice"

describe("testing gendersReducer", () => {
  test("testing adding AdminGenderList", () => {
    const initialState: EntityState<IGenders> = {
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

    const newGender: IGenders = {
      name: "testName4New",
      translate: "translate4New",
      id: "uuid4New",
    }

    expect(gendersReducer(initialState, actions.addGender(newGender))).toEqual(
      receivedState
    )
  })
  test("testing adding many genders", () => {
    const initialState: EntityState<IGenders> = {
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

    const newGenders: IGenders[] = [
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
      gendersReducer(initialState, actions.addManyGenders(newGenders))
    ).toEqual(receivedState)
  })
  test("testing editing AdminGenderList", () => {
    const initialState: EntityState<IGenders> = {
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

    const editedGender: Update<IGenders> = {
      id: "uuid3",
      changes: {
        name: "testNameEdited3",
        translate: "translateEdited3",
        id: "uuid3",
      },
    }

    expect(
      gendersReducer(initialState, actions.updateGender(editedGender))
    ).toEqual(receivedState)
  })
  test("testing remove AdminGenderList", () => {
    const initialState: EntityState<IGenders> = {
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
    expect(gendersReducer(initialState, actions.removeGender("uuid2"))).toEqual(
      receivedState
    )
  })
})
