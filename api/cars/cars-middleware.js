var vinValidator = require('vin-validator');
const db = require("./cars-model")

const checkCarId = (req, res, next) => {
  if (!req.params.id) {
    res.status(404).json({
      message: `car with the id ${req.params.id} is not found`
    })
  }
  next()
}

const checkCarPayload = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "feild name is missing"
    })
  } else {
    if (!req.body.vin) {
      res.status(404).json({
        message: "Vin number is required"
      })
    } else if (!req.body.make) {
      res.status(404).json({
        message: "Car make is required"
      })
    } else if (!req.body.model) {
      res.status(404).json({
        message: "Car model is required"
      })
    } else if (!req.body.mileage) {
      res.status(404).json({
        message: "Car milage is required"
      })
    } else {
  next()
  }
}}

const checkVinNumberValid = (req, res, next) => {
  if (vinValidator.validate(req.body.vin)) {
    next()
  } else { 
    res.status(400).json({
      message: "Vin is not valid"
    })
  }
}


const checkVinNumberUnique = (req, res, next) => {
  db.getAll()
    .then((cars) => {
      cars.map(cars => {
      if (cars === req.body.vin) {
       return res.status(400).json({
          message: `vin ${req.body.vin} already exists`
        })
      }
    })
    })
    next()
}

module.exports = {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique}