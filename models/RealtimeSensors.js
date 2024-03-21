const mongoose = require('mongoose')

const realTimeSensorSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    value: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('RealtimeSensor', realTimeSensorSchema)