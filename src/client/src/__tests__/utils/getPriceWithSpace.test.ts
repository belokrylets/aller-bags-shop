import { getPriceWithSpace } from "shared/utils/getPriceWithSpace"

describe("testing getPriceWithSpace", () => {
  test("should 100", () => {
    expect(getPriceWithSpace(100)).toBe("100")
  })
  test("should 1000", () => {
    expect(getPriceWithSpace(1000)).toBe("1 000")
  })
  test("should 10000", () => {
    expect(getPriceWithSpace(10000)).toBe("10 000")
  })
  test("should 0", () => {
    expect(getPriceWithSpace(0)).toBe("0")
  })
})
