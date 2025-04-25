
import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import{connectDB} from "./config/db.js";



dotenv.config({path:"./config/config.env"});




const app =express();

app.use(express.json());

app.use(morgan("dev"));

app.get('/api/v1/', (req, res )=>{
    res.send('get all notes');
});



app.get('/api/v1/:id', (req, res )=>{
    res.send('get a note');
});


app.post('/api/v1/', (req, res )=>{
    res.send('create a note');
}); 

 app.put('/api/v1/:id', (req, res )=>{
    res.send('update a note');                  
 });

 app.delete('/api/v1/:id', (req, res )=>{
    res.send('delete a note');                  
 });


  
app.listen(3000,() =>{
try { 
     console.log('server  running  3000 !');
     console.log('connected to db !');
     

} catch (error) {
    console.log('error connecting to db !');
    console.log(error);
    process.exit(1);
}


});