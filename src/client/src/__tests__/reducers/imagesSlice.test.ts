import { EntityState } from "@reduxjs/toolkit"
import { IImages } from "store/reducers/imagesSlice/images.modal"
import imagesReducer, { actions } from "store/reducers/imagesSlice/imagesSlice"

describe("testing imagesReducer", () => {
  test("testing adding image", () => {
    const initialState: EntityState<IImages> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", thumbnails: {}, id: "uuid1" },
        uuid2: { name: "testName2", thumbnails: {}, id: "uuid2" },
        uuid3: { name: "testName3", thumbnails: {}, id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid2", "uuid3", "uuid4New"],
      entities: {
        uuid1: { name: "testName1", thumbnails: {}, id: "uuid1" },
        uuid2: { name: "testName2", thumbnails: {}, id: "uuid2" },
        uuid3: { name: "testName3", thumbnails: {}, id: "uuid3" },
        uuid4New: { name: "testName4New", thumbnails: {}, id: "uuid4New" },
      },
    }

    const newImage: IImages = {
      name: "testName4New",
      thumbnails: {},
      id: "uuid4New",
    }

    expect(imagesReducer(initialState, actions.addImage(newImage))).toEqual(
      receivedState
    )
  })
  // test('testing adding many image', () => {
  //   const initialState: EntityState<IImages> = {
  //     ids: ["uuid1", "uuid2", "uuid3",
  //     ],
  //     entities: {
  //       'uuid1': { name: 'testName1', thumbnails: {}, id: 'uuid1' },
  //       'uuid2': { name: 'testName2', thumbnails: {}, id: 'uuid2' },
  //       'uuid3': { name: 'testName3', thumbnails: {}, id: 'uuid3' },

  //     },
  //   }
  //   const receivedState = {
  //     ids: ["uuid1", "uuid2", "uuid3", 'uuid4New', 'uuid5New'
  //     ],
  //     entities: {
  //       'uuid1': { name: 'testName1', thumbnails: {}, id: 'uuid1' },
  //       'uuid2': { name: 'testName2', thumbnails: {}, id: 'uuid2' },
  //       'uuid3': { name: 'testName3', thumbnails: {}, id: 'uuid3' },
  //       'uuid4New': { name: 'testName4New', thumbnails: {}, id: 'uuid4New' },
  //       'uuid5New': { name: 'testName5New', thumbnails: {}, id: 'uuid5New' },

  //     },
  //   }

  //   const newImages: IImages[] = [
  //     {
  //       name: 'testName4New', thumbnails: {}, id: 'uuid4New'
  //     },
  //     {
  //       name: 'testName5New', thumbnails: {}, id: 'uuid5New'
  //     }
  //   ]

  //   expect(imagesReducer(initialState, actions.addManyImages(newImages))).toEqual(receivedState)
  // })
  test("testing remove color", () => {
    const initialState: EntityState<IImages> = {
      ids: ["uuid1", "uuid2", "uuid3"],
      entities: {
        uuid1: { name: "testName1", thumbnails: {}, id: "uuid1" },
        uuid2: { name: "testName2", thumbnails: {}, id: "uuid2" },
        uuid3: { name: "testName3", thumbnails: {}, id: "uuid3" },
      },
    }
    const receivedState = {
      ids: ["uuid1", "uuid3"],
      entities: {
        uuid1: { name: "testName1", thumbnails: {}, id: "uuid1" },
        uuid3: { name: "testName3", thumbnails: {}, id: "uuid3" },
      },
    }
    expect(imagesReducer(initialState, actions.removeImage("uuid2"))).toEqual(
      receivedState
    )
  })
})
