require("dotenv").config();
const express = require("express");
const cors = require("cors")

const server = express();
server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 9000

server.get("/api/hello", (req, res, next) => {
    res.json({message: "Api is working"})
})

server.use("*", (req, res, next) => {
    res.send(`<h1>Hello, there!</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

