import jwt from "jsonwebtoken"

export const generateJwt = (id, email, roles, basketId) => {
  return jwt.sign({ id, email, roles, basketId }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  })
}
