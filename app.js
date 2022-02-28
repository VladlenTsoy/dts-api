const express = require("express")
const indexRouter = require("./routes/index")

const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

module.exports = app
