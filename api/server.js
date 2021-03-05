const express = require("express")
const router = require("./cars/cars-router")
const server = express()

server.use(express.json());
server.use("/api/cars", router)

server.get("/", (req, res) => {
    res.status(200).json({
        message: "DB2 Project"
    })
})

module.exports = server
