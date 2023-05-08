const express = require('express');
const router = express.Router();
const { Employee, Civ, ArtType, ArtWork, Visitor } = require('../../models');

router.get("/", async(req,res)=>{
    try{
        const types= await ArtType.findAll({include:ArtWork})
        if(types.length===0){
            return res.status(404).json({msg:"no art types in database!"})
        }
        res.json(types)
    } catch(err){
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

router.get("/:id",(req,res)=>{
    ArtType.findByPk(req.params.id).then(types=>{
        if(!types){
            return res.status(404).json({msg:"no art Types with that id in database!"})
        }
        res.json(types)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to post an ArtType"})
    } 
    ArtType.create({
        name:req.body.name,
        civId:req.body.civId
    }).then(newTypes=>{
        res.json(newTypes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.delete("/:id",(req,res)=>{
    ArtType.destroy({
        where:{
            id:req.params.id
        }
    }).then(delTypes=>{
        if(!delTypes){
            return res.status(404).json({msg:"no animal with this id in database!"})
        }
        res.json(delTypes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.put("/:id",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to update an ArtType"})
    } 
    ArtType.update({
        name:req.body.name,

    },{
        where:{
            id:req.params.id
        }
    }).then(editTypes=>{
        if(!editTypes[0]){
            return res.status(404).json({msg:"no art Types with this id in database!"})
        }
        res.json(editTypes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

module.exports = router