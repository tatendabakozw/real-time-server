const express = require("express");
const Sensor = require("../models/Sensor");
const RealtimeSensors = require("../models/RealtimeSensors");
const router = express.Router();

// save items to database
router.post("/create", async (req, res, next) => {
  try {
    // all code to create sencr values gies here
    const { name, value } = req.body;

    const newSensorItem = Sensor({
      name,
      value,
    });

    const savedSensorItem = await newSensorItem.save();

    return res.status(200).send({message: 'Value saved successfully', item: savedSensorItem})

  } catch (error) {
    next(error)
  }
});

// save items to database
router.post("/create-realtime", async (req, res, next) => {
    try {
      // all code to create sencr values gies here
      const { name, value } = req.body;
  
      const newSensorItem = RealtimeSensors({
        name,
        value,
      });
  
      const savedSensorItem = await newSensorItem.save();
  
      return res.status(200).send({message: 'Value saved successfully', item: savedSensorItem})
  
    } catch (error) {
      next(error)
    }
  });

// get items from database
router.get('/all', async(req, res, next)=>{
    try {
        const values = await Sensor.find({})
        return res.status(200).send({values})
    } catch (error) {
        next(error)
    }
})

// get items from database
router.get('/all-realtime', async(req, res, next)=>{
    try {
        const values = await RealtimeSensors.find({})
        return res.status(200).send({values})
    } catch (error) {
        next(error)
    }
})

module.exports = router;
