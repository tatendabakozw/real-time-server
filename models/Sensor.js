const mongoose = require('mongoose')

const sensorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    value: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Sensor', sensorSchema)