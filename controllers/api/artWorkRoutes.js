const express = require('express');
const router = express.Router();
const {artWork} = require('../models');

router.get("/", async(req,res)=>{
    try{
        const works= await artWork.findAll()
        if(works.length===0){
            return res.status(404).json({msg:"no art works in database!"})
        }
        res.json(works)
    } catch(err){
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

router.get("/:id",(req,res)=>{
    artWork.findByPk(req.params.id).then(work=>{
        if(!work){
            return res.status(404).json({msg:"no art work with that id in database!"})
        }
        res.json(work)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/",(req,res)=>{
    // if(!req.session.userId){
    //     return res.status(403).json({msg:"login first you knucklehead!"})
    // } 
    artWork.create({
        name:req.body.name,
        age:req.body.age,
        species:req.body.species,
        notes:req.body.notes,
        ZooId:req.session.userId
    }).then(newAni=>{
        res.json(newAni)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})
