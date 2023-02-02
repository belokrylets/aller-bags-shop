import nodemailer from "nodemailer"

const sendOrder = async (email, phone, comment) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aller.bag.order@gmail.com",
      pass: "",
    },
  })
  let result = await transporter.sendMail({
    from: email,
    to: "s.belokrylets@gmail.com",
    subject: `Заявка на пошив от ${email}`,
    text: `Номер телефона ${phone}; Комментарий к заказу ${comment}`,
  })
  console.log("result", result)

  return result
}

export default sendOrder
