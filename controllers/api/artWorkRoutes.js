const express = require('express');
const router = express.Router();
const { Museum, Civ, ArtType, ArtWork, User } = require('../../models');

router.get("/", async(req,res)=>{
    try{
        const works= await ArtWork.findAll()
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
    ArtWork.findByPk(req.params.id).then(work=>{
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
    ArtWork.create({
        name:req.body.name,
        artist:req.body.artist,
        image_url:req.body.image_url,
        description:req.body.description,
        date_created:req.body.date_created,
        type_id: req.body.type_id
    }).then(newWork=>{
        res.json(newWork)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.delete("/:id",(req,res)=>{
    ArtWork.destroy({
        where:{
            id:req.params.id
        }
    }).then(delWork=>{
        if(!delWork){
            return res.status(404).json({msg:"no animal with this id in database!"})
        }
        res.json(delWork)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

module.exports = router