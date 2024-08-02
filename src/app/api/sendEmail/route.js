// import { NEXT_REQUEST_META } from 'next/dist/server/request-meta';
// "use client"
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const toEmail = process.env.TO_EMAIL;
const password = process.env.PASSWORD;

const fields = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        const generateEmail = (data) => {
            const str = "";
            const stringText = Object.entries(data).reduce((str, [key, val]) => (str += `${fields[key]}: ${val}\n`), "")
            const htmlText = Object.entries(data).reduce((str, [key, val]) => (str += `<b>${fields[key]}:</b> <span>${val}</span><p></p>`), "")
            return {
                text: stringText,
                html: htmlText,
            }
        }

        const emailHTML = "<h2>Subject: </h2><span>" + subject + "</span>"
            + "<h2>Name: </h2><span>" + name
            + "</span><h2>Email: </h2><span>" + email
            + "</span><h2>Message: </h2><span>" + message + "</span>";

        // if (!contactName || !email || !subject || !message) {
        //     return res.status(400).json({ error: 'Missing required fields' });
        // }

        const transporter = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            // host: "smtp.gmail.com",
            port: 587,
            // port: 465,
            secure: false, // Use `true` for port 465, `false` for all other ports
            // secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "api",
                pass: password,
            },
        });

        const mailOption = {
            // send mail with defined transport object
            from: 'mailtrap@demomailtrap.com', // sender address
            to: toEmail, // list of receivers
            subject: "From Personal Website: " + subject, // Subject line
            ...generateEmail(body),
            // text: emailText, // plain text body
            // html: emailHTML,
            // html: ("<h1>Subject: ${subject}</h1><h3>Name: ${contactName}</h3><h3>Email: ${email}</h3><h2>Message: ${message}</h2>"
            // )
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        }
        await transporter.sendMail(mailOption);

        return NextResponse.json({ message: "email sent successfully" }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Nah Fam" }, { status: 500 });
    }
}