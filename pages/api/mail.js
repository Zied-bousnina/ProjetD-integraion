// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sgMail = require('@sendgrid/mail');

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env
sgMail.setApiKey(SG_API_KEY)
export default async function handler(req, res) {
  const {nom, prenom, email, password} = JSON.parse(req.body)
  console.log( JSON.parse(req.body))
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "nextjs app",
    html: `<p><strong>Name: </strong> </p>
    <p><strong>Name: </strong> </p>
    <p><strong>Email: </strong> </p>
    <p><strong>password: </strong> </p>`
  };
  await sgMail.send(msg)


  res.status(200).json({ success: true })
}
