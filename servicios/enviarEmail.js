import {createTransport} from 'nodemailer'
import 'dotenv/config'

export default async function enviarEmail(emailto,asunto,mensaje){
    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: `${process.env.USER_EMAIL}`,
            pass: `${process.env.TOKEN_EMAIL}` 
        } 
    })

    const mailOptions = {
        from: `Mensaje desde el servidor`,
        to: `${emailto}`,
        subject: asunto,
        html: mensaje
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        throw new Error (`Envio de email fallido ${error}`)
    }
}