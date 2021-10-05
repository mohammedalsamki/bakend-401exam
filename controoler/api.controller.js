'use strict';

const axios =require('axios');

const getDataApi =async (req,res)=>{
    const url=`https://watches-world.herokuapp.com/watches-list/`;
    let axiosres =await axios.get(url);
    let ApiData =axiosres.data;

    console.log(ApiData);
    res.send(ApiData);

}
module.exports={getDataApi};