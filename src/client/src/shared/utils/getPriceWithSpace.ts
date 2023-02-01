export const getPriceWithSpace = (price: number): string => {
  let stringPrice = `${price}`
  if (price < 1000) {
    return `${price}`
  }
  const firstArg = stringPrice.length - 3
  const lastArg = stringPrice.length

  return `${stringPrice.substring(firstArg, 0)} ${stringPrice.substring(
    firstArg,
    lastArg
  )}`
}
