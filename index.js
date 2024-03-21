const express = require('express')
const connectDB = require('./mongo-config')
const app = express()
const cors = require('cors')

const PORT = 5500

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors("*"))

connectDB()


// user level middleware (these are defined by the user)
app.use('/sensor', require('./routes/sensor'))

app.get('/', (req, res) =>{
    res.send({message: 'Server running successfully'})
})

app.listen(PORT, () =>{
    console.log(`Server up on port ${PORT}`)
})

