const express=require('express');
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const loginRouter=require('./Routes/admin');
const postRouter=require('./Routes/post')

const app=express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
})
.then(res=>console.log("Database Connected !"))
.catch(err=>console.log(err));

app.use("/upload/images",express.static('upload/images'))
app.use('/api',loginRouter);
app.use('/api',postRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on :http://localhost:5000`)
})