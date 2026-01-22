import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log('Handler started')

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const apiKey = process.env.RESEND_API_KEY

        if (!apiKey) {
            console.error('Missing RESEND_API_KEY')
            return res.status(500).json({ error: 'Server configuration error' })
        }

        const resend = new Resend(apiKey)

        const {
            name,
            company,
            email,
            phone,
            service,
            location,
            budget,
            timeline,
            description,
            contactMethod
        } = req.body

        await resend.emails.send({
            from: 'test@resend.dev',
            to: 'grx.gonzalo@gmail.com',
            subject: 'Nuevo contacto desde la web',
            html: `
    <h3>Nuevo lead recibido</h3>
    <p><b>Nombre:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Empresa:</b> ${company}</p>
    <p><b>Servicio:</b> ${service}</p>
    <p><b>Mensaje:</b> ${description}</p>
  `
        })

        return res.status(200).json({ success: true })


    } catch (error) {
        console.error('EMAIL ERROR:', error)
        return res.status(500).json({ error: 'Email failed' })
    }
}
