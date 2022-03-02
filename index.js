const express = require("express")
const indexRouter = require("./routes/index")
const helmet = require("helmet")
const cors = require("cors")

const index = express()
const port = process.env.PORT || 8000
//
index.use(cors())
index.use(helmet())
index.use(express.json({limit: "50mb"}))
index.use(express.urlencoded({extended: false}))
//
index.use("/", indexRouter)
//
index.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

module.exports = index
