const express = require("express")
const router = require('express').Router()
const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require("./cars-middleware")
const cars = require("./cars-model")

router.get("/", async (req, res) => {
    try{
        cars.getAll()
            .then((cars) => {
                res.status(200).json(cars)
            })
    }
    catch(err) {
        res.status(500).json({
            message: "Error has occurred"
        })
    }
})

router.get("/:id", checkCarId, async (req, res) => {
    try{
        cars.getById(req.params.id)
            .then((car) => {
                res.status(200).json(car)
            })
    }
    catch(err) {
        res.status(500).json({
            message: "Error has occurred"
        })
    }
})


router.post("/",checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res) => {
    try{
        cars.create(req.body)
            .then((car) => {
                res.status(201).json(car)
            })
    }
    catch(err) {
        res.status(500).json({
            message: "Error has occurred"
        })
    }
})

module.exports = router;