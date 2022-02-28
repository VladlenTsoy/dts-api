const nodemailer = require("nodemailer")

const dtsbrokers = async (req, res) => {
    try {
        const email = "vladlengg@gmail.com"
        let testAccount = await nodemailer.createTestAccount()
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: email,
                pass: "99897Vladlen7816095"
            }
        })
        let info = await transporter.sendMail({
            from: `DTS BROKERAGE INC. <${email}>`,
            to: "vladlen.tsoy@yandex.com",
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
        console.log(e)
        return res.status(500).send({message: "Server error"})
    }
}

module.exports = {dtsbrokers}
