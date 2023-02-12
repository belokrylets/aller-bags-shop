import nodemailer from "nodemailer"

const sendOrder = async (email, phone, comment) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aller.bag.order@gmail.com",
      pass: "xrpcyvekwxxbwlrk",
    },
  })
  let result = await transporter.sendMail({
    from: email,
    to: "s.belokrylets@gmail.com",
    subject: `Заявка на пошив от ${email}`,
    text: `Номер телефона ${phone}; Комментарий к заказу ${comment}`,
  })
  return result
}

export default sendOrder
