import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const User = sequelize.define("user", {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Product = sequelize.define("product", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  slug: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  genderId: { type: DataTypes.UUID, allowNull: false },
  categoryId: { type: DataTypes.UUID, allowNull: false },
  colorId: { type: DataTypes.UUID, allowNull: false },
  imageId: { type: DataTypes.UUID, allowNull: false },
})

const Categories = sequelize.define("categories", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  translate: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Gender = sequelize.define("gender", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  translate: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Color = sequelize.define("color", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  translate: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Image = sequelize.define("image", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  thumbnails: { type: DataTypes.JSON, allowNull: false },
})

const Orders = sequelize.define("orders", {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  comment: { type: DataTypes.STRING, allowNull: false },
})

Gender.hasOne(Product)

Categories.hasOne(Product)

Color.hasMany(Product)

Image.hasMany(Product)

export { User, Gender, Color, Product, Categories, Image, Orders }
