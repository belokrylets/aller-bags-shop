export const links = {
  home: {
    title: "Главная",
    path: "/",
  },
  catalog: {
    title: "Каталог",
    path: "/catalog",
  },
  about: {
    title: "О нас",
    path: "/about",
  },
  profile: {
    title: "Личный кабинет",
    path: "/profile",
  },
  basket: {
    title: "Корзина",
    path: "/profile/basket",
  },
  selectedProduct: {
    path: "/catalog/:slug",
  },
  admin: {
    path: "/admin",
  },
  menuItem: {
    path: "/admin/:menuItem",
  },
  errorPage: {
    path: "/404",
  },
  selectedOrder: {
    path: "/admin/:id",
    title: "Заказ",
  },
}
