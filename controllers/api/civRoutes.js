const express = require('express');
const router = express.Router();
const { Museum, Civ, ArtType, ArtWork, User } = require('../../models');

router.get("/", async(req,res)=>{
    try{
        const civ= await Civ.findAll({include:ArtType})
        if(civ.length===0){
            return res.status(404).json({msg:"no art civ in database!"})
        }
        res.json(civ)
    } catch(err){
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

router.get("/:id",(req,res)=>{
    Civ.findByPk(req.params.id).then(civ=>{
        if(!civ){
            return res.status(404).json({msg:"no art civ with that id in database!"})
        }
        res.json(civ)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to post an Civ"})
    } 
    Civ.create({
        name:req.body.name,
        time_period:req.body.time_period,
        museumId:req.body.museumId
    }).then(newCiv=>{
        res.json(newCiv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.delete("/:id",(req,res)=>{
    Civ.destroy({
        where:{
            id:req.params.id
        }
    }).then(delCiv=>{
        if(!delCiv){
            return res.status(404).json({msg:"no civ with this id in database!"})
        }
        res.json(delCiv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.put("/:id",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to update a Civ"})
    } 
    Civ.update({
        name:req.body.name,
        time_period:req.body.time_period,
        museumId:req.body.museumId
    },{
        where:{
            id:req.params.id
        }
    }).then(editCiv=>{
        if(!editCiv[0]){
            return res.status(404).json({msg:"no art Civ with this id in database!"})
        }
        res.json(editCiv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

module.exports = router