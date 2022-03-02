const nodemailer = require("nodemailer")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const dtsbrokers = async (req, res) => {
    try {
        const data = req.body
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
            text: `
                This message is for: ${data.for_whom}\n
                Full name: ${data.full_name}\n
                Last name: ${data.last_name}\n
                Email: ${data.email}\n
                Phone: ${data.phone}\n
                Company: ${data.company}\n
                Message: ${data.message}\n
            `,
            html: `
                    <b>This message is for:</b> ${data.for_whom}<br/>
                    <b>Full name:</b> ${data.full_name}<br/>
                    <b>Last name:</b> ${data.last_name}<br/>
                    <b>Email:</b> ${data.email}<br/>
                    <b>Phone:</b> ${data.phone}<br/>
                    <b>Company:</b> ${data.company}<br/>
                    <b>Message:</b> ${data.message}<br/>
                `
        })
        return res.json({
            status: 200,
            message: "success"
        })
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

/**
 * Для DTS
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const dts = async (req, res) => {
    try {
        const data = req.body
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
            from: `DTS INC. <${email}>`,
            to: ["vladlengg@gmail.com", "maftuna.i@dtsincorporated.com"],
            subject: "Hello ✔",
            text: `
                Date of Application: ${data.date_of_application}\n
                License Number: ${data.license_number}\n
                Full name: ${data.full_name}\n
                License Type: ${data.license_type}\n
                Current Address: ${data.current_address}\n
                Do you have the legal right to work in the U.S.?: ${data["1"]}\n
                Download you CDL Class A License: ${data["2"]}\n
                Are you over the age of 21?: ${data["3"]}\n
                Have you ever been denied a license, permit or privilege to operate a motor vehicle?: ${data["4"]}\n
                Current Employer Company name: ${data.current_employer_company}\n
                Have any license, permit or privilege ever been suspended or revoked?: ${data["5"]}\n
                Current Employer Address (please include address, city, state, and zip code): ${data.current_employer_address}\n
                Show special courses or training that will help you as a driver: ${data.special_courses}\n
                Current Employer Contact Person and Phone Number: ${data.current_employer_contact}\n
                What other trucking, transportation or other experience do you have?: ${data.other_trucking}\n
                Accident Record for Past 3 Years or More: ${data.accident_record}\n
                List special equipment or technical materials you can work with: ${data.special_equipment}\n
                Traffic Conviction Record for Past 3 Years or More: ${data.traffic_conviction_record}\n
                Provide Us with Your Vehicle Information: ${data.vehicle_information}\n
                List any job related classes or programs you completed, and the dates you attended: ${data.job_related_classes}\n
                Your Email: ${data.your_email}\n
                State Drive License: ${data.state_drive_license}\n
            `,
            html: `
                    <b>Date of Application:</b> ${data.date_of_application}<br/>
                    <b>License Number:</b> ${data.license_number}<br/>
                    <b>Full name:</b> ${data.full_name}<br/>
                    <b>License Type:</b> ${data.license_type}<br/>
                    <b>Current Address:</b> ${data.current_address}<br/>
                    <b>License Expiration Date:</b> ${data.license_expiration_date}<br/>
                    <b>Do you have the legal right to work in the U.S.?:</b> ${data["1"]}<br/>
                    <b>Download you CDL Class A License:</b> ${data["2"]}<br/>
                    <b>Are you over the age of 21?:</b> ${data["3"]}<br/>
                    <b>Have you ever been denied a license, permit or privilege to operate a motor vehicle?:</b> ${data["4"]}<br/>
                    <b>Current Employer Company name:</b> ${data.current_employer_company}<br/>
                    <b>Have any license, permit or privilege ever been suspended or revoked?:</b> ${data["5"]}<br/>
                    <b>Current Employer Address (please include address, city, state, and zip code):</b> ${data.current_employer_address}<br/>
                    <b>Show special courses or training that will help you as a driver:</b> ${data.special_courses}<br/>
                    <b>Current Employer Contact Person and Phone Number:</b> ${data.current_employer_contact}<br/>
                    <b>What other trucking, transportation or other experience do you have?:</b> ${data.other_trucking}<br/>
                    <b>Accident Record for Past 3 Years or More:</b> ${data.accident_record}<br/>
                    <b>List special equipment or technical materials you can work with:</b> ${data.special_equipment}<br/>
                    <b>Traffic Conviction Record for Past 3 Years or More:</b> ${data.traffic_conviction_record}<br/>
                    <b>Provide Us with Your Vehicle Information:</b> ${data.vehicle_information}<br/>
                    <b>List any job related classes or programs you completed, and the dates you attended:</b> ${data.job_related_classes}<br/>
                    <b>Your Email:</b> ${data.your_email}<br/>
                    <b>State Drive License:</b> ${data.state_drive_license}<br/>
                `
        })
        return res.json({
            status: 200,
            message: "success"
        })
    } catch (e) {
        return res.status(500).send({message: e.message})
    }
}

module.exports = {dtsbrokers, dts}
