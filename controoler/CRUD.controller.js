'use strict ';

const WatchModal =require('../modal/wath.modal');

//////// Post fun

const CreatFav =async (req,res)=>{
    let bodyData =req.body;
    let newData =await new WatchModal(bodyData);
    try{
        newData.save();
        res.send(newData);
        console.log(newData);
    }catch(err){
        console.log(err);
        res.send(err)
    }

}
//////// Get fun

const GetFav =(req,res)=>{

    WatchModal.find().then((data)=>{
        res.status(200).json(data);
    })
    
}
//////// Delete fun

const DeleteFav =(req,res)=>{
    const _id = req.params.id;
    WatchModal.findByIdAndDelete(_id).then(()=>{
        WatchModal.find({}).then((data)=>res.json(data))
    })
    
}
//////// Update fun

const updateFav =(req,res)=>{
    const _id = req.params.id;
    let update =res.body;
    WatchModal.findOne({ id:_id}).then(item =>{
        item.title=update.title,
        item.description=update.description,
        item.toUSD=update.toUSD,
        item.image_url=update.image_url
        item.save();
    });
    let newup= WatchModal.find({});
    JSON.stringify(newup);
    res.status(200).send(newup);

    
}

module.exports={
    CreatFav,
    GetFav,
    DeleteFav,
    updateFav
}