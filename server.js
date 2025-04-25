
import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";




dotenv.config({path:"./config/config.env"});




const app =express();

app.use(express.json());

app.use(morgan("dev"));

app.get('/', (req, res )=>{
    res.send('Haloo World');
});


app.listen(3000,() =>{
 console.log('server  running  3000 !');
});
