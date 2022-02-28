const nodemailer = require("nodemailer")

const dtsbrokers = async (req, res) => {
    try {
        const email = "vladlen.tsoy@yandex.ru"
        let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: email,
                pass: "Vlad7816095"
            }
        })
        await transporter.sendMail({
            from: `DTS BROKERAGE INC. <${email}>`,
            to: "vladlengg@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>"
        })
        // console.log("Message sent: %s", info.messageId)
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
        return res.json({
            status: 200,
            message: "success"
        })
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {dtsbrokers}
