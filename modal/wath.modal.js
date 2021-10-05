"use strict";

const mongoose =require('mongoose');

const watcchSchema =mongoose.Schema({
    title:String,
    description:String,
    toUSD:Number,
    image_url:String,


})
const WatchModal =mongoose.model('fav',watcchSchema);

module.exports=WatchModal;
