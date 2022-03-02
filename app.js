const express = require("express")
const indexRouter = require("./routes/index")
const helmet = require("helmet")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 8000
//
app.use(cors())
app.use(helmet())
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: false}))
//
app.use("/", indexRouter)
//
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

module.exports = app
