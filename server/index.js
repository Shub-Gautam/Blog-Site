// you can write this or const express = require('express');
import express, { Router } from 'express';

//in react you dont have to specify extensions but in node you have to
import connection from './database/db.js';

const app = express();

const PORT = process.env.PORT || 8000;


app.listen(PORT,(req,res)=>{
    console.log('Server is listening on port 8000');
});


connection();