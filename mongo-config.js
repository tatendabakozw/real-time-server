const mongoose = require('mongoose')

// mongodb url 
const LOCAL_DB = 'mongodb://localhost:27017/real_DB'

// funciton to conenct db
const connectDB = () =>{
    mongoose.connect(LOCAL_DB, {})
    mongoose.connection.once('open',(err)=>{
        if(err){
            console.log('there was an error :- ',err)
        }else{
            console.log(`Database Connected Successfully`)
        }
    })
}

// export databse funtoin to yse it in other files
module.exports=connectDB