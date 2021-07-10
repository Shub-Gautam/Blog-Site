// you can write this or const express = require('express');
//cors dependency is used to transfer data between two different ports
import express, { Router } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import path from 'path';

//in react you dont have to specify extensions but in node you have to
import connection from './database/db.js';
import router from "./Routes/route.js";



const app = express();

const PORT = process.env.PORT || 8000;


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
}
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);




app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on port ${PORT}`);
});

connection();