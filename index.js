const express = require("express")
const indexRouter = require("./routes/index")
const helmet = require("helmet")

const app = express()
const port = process.env.PORT || 3000
//
app.use(helmet())
app.use(express.json({extended: false}))
app.use("/", indexRouter)
//
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

module.exports = app