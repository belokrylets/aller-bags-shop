import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const User = sequelize.define("user", {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING, defaultValue: "USER" },
  basketId: { type: DataTypes.UUID, allowNull: false },
})

const UserInfo = sequelize.define("userInfo", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  patronymic: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.STRING, allowNull: false },
})

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.UUID, primaryKey: true },
  userId: { type: DataTypes.UUID, allowNull: false },
})

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.UUID, primaryKey: true },
})

const Product = sequelize.define("product", {
  id: { type: DataTypes.UUID, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  slug: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  size: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  genderId: { type: DataTypes.UUID, allowNull: false },
  categoryId: { type: DataTypes.UUID, allowNull: false },
  colorId: { type: DataTypes.UUID, allowNull: false },
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
  type: { type: DataTypes.STRING, allowNull: false },
  path: { type: DataTypes.STRING, allowNull: false },
  thumbnails: { type: DataTypes.JSON, allowNull: false },
})

const Orders = sequelize.define("orders", {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  comment: { type: DataTypes.STRING, allowNull: false },
})

const OrdersSuccess = sequelize.define("ordersSuccess", {
  id: { type: DataTypes.UUID, primaryKey: true },
  fullName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  productsIds: { type: DataTypes.TEXT, allowNull: false },
})

Gender.hasMany(Product)

Categories.hasMany(Product)

Color.hasMany(Product)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct, { as: "products" })
BasketProduct.hasMany(Basket)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(Image, { as: "imagesIds" })
Image.belongsTo(Product)

export {
  User,
  Gender,
  Color,
  Product,
  Categories,
  Image,
  Orders,
  Basket,
  BasketProduct,
  UserInfo,
  OrdersSuccess,
}
