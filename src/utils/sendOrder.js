import nodemailer from "nodemailer"

const sendOrder = async (
  email,
  phone,
  comment,
  fullName = "",
  type = "order"
) => {
  const toEmail = "s.belokrylets@gmail.com"
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aller.bag.order@gmail.com",
      pass: "xrpcyvekwxxbwlrk",
    },
  })
  if (type === "orderSuccess") {
    let result = await transporter.sendMail({
      from: email,
      to: toEmail,
      subject: `Оформление заказа от ${fullName}`,
      text: ` ${email}/${phone}/${comment}`,
    })
    return result
  } else {
    let result = await transporter.sendMail({
      from: email,
      to: toEmail,
      subject: `Заявка на пошив от ${email}`,
      text: `Номер телефона ${phone}; Комментарий к заказу ${comment}`,
    })
    return result
  }
}

export default sendOrder
