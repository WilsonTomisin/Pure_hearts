const express = require("express")
const {Resend} = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(express.json())
app.get('/api', (req, res) => {
    res.json({
        message:"hello from server"
    })
})

app.post('/api/send/contact', async (req,res) => {
    const { first_name, email, phone, message } = await req.body

try {
    const { data } = await resend.emails.send({
      from: 'tommywilson972@gmail.com', // Must be a verified domain in Resend
      to: [email],
      subject: 'Contact Mail!',
      html: `  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Hello my name is ${first_name}</h2>
            
            <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            <p style="color: #666; line-height: 1.6;">YOu can reach me on:${phone} / <a href='mailto:${email}' stlye="text-decoration:underline;">${email}</a></p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">Sent via Resend API</p>
          </div>`,
    }) 

    res.json({
        status: 201,
        data: data
    })
} catch (error) {
    res.json({
        status: 400,
        message: error.message
    })
}
})

app.post('/api/send/application', (req, res) => {
})


module.exports = app