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
            clientType,
            company,
            email,
            phone,
            service,
            serviceSubcategory,
            location,
            budget,
            timeline,
            description,
            contactMethod
        } = req.body

        await resend.emails.send({
            from: 'VPG Proyectos <info@mail.vpgproyectos.es>',
            to: 'dgarcia@vpgproyectos.es',
            replyTo: email,
            subject: 'Nuevo contacto desde la web',
            html: `
    <h3>Nuevo lead recibido</h3>
    <p><b>Nombre:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Teléfono:</b> ${phone}</p>
    <p><b>Tipo de Cliente:</b> ${clientType === 'empresa' ? 'Empresa' : 'Particular'}</p>
    ${clientType === 'empresa' ? `<p><b>Empresa:</b> ${company}</p>` : ''}
    <p><b>Servicio:</b> ${service}</p>
    ${serviceSubcategory ? `<p><b>Especialidad:</b> ${serviceSubcategory}</p>` : ''}
    <p><b>Ubicación:</b> ${location}</p>
    <p><b>Presupuesto:</b> ${budget}</p>
    <p><b>Plazo:</b> ${timeline}</p>
    <p><b>Preferencia de contacto:</b> ${contactMethod}</p>
    <p><b>Mensaje:</b> ${description}</p>
  `
        })

        return res.status(200).json({ success: true })


    } catch (error) {
        console.error('EMAIL ERROR:', error)
        return res.status(500).json({ error: 'Email failed' })
    }
}
