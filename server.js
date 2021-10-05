'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { getDataApi } = require('./controoler/api.controller');
const  mongoose  = require('mongoose');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const MONGODB_LINK=process.env.MONGODB_LINK
const PORT=process.env.PORT;
const {
    CreatFav,
    GetFav,
    DeleteFav,
    updateFav
} =require('./controoler/CRUD.controller')
mongoose.connect(MONGODB_LINK, { 
    useNewUrlParser: true ,
    
}).then(()=> console.log("DB is Connected")).catch(err=>console.log(err));

app.get('/api',getDataApi)

app.post('/watch',CreatFav);
app.get('/watch',GetFav);
app.delete('/watch/:id',DeleteFav);
app.put('/watch/:id',updateFav);

app.get('/',(re,res)=>{
    res.send('server is runing');
});


app.listen(PORT,()=>{
    console.log(`server is running in port: ${PORT}`);
})