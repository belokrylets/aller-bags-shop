import jwt from "jsonwebtoken"

export const generateJwt = (id, email, roles) => {
  return jwt.sign({ id, email, roles }, process.env.SECRET_KEY, {
    expiresIn: "12h",
  })
}
