const express = require("express")
const indexRouter = require("./routes/index")

const app = express()

app.use("/", indexRouter)
const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

module.exports = app
