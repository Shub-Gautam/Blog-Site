import mongoose from 'mongoose';



const connection = async ()=>{
    try{
    const URL = 'mongodb+srv://Admin:%23%40Mongodb225@blogweb.qppc0.mongodb.net/Project0?retryWrites=true&w=majority'

    await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false});
        console.log("Database connected succesfully")
}catch(error){
        console.log('error while connecting to MongoDB',error)
    }
}

export default connection;