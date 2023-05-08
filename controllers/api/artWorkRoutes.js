const express = require('express');
const router = express.Router();
const { Employee, Civ, ArtType, ArtWork, Visitor } = require('../../models');

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
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to post an artwork"})
    } 
    ArtWork.create({
        name:req.body.name,
        artist:req.body.artist,
        image_url:req.body.image_url,
        description:req.body.description,
        date_created:req.body.date_created,
        type_id: req.body.type_id,
        artTypeId: req.body.artTypeId
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
            return res.status(404).json({msg:"no art work with this id in database!"})
        }
        res.json(delWork)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.put("/:id",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to update an artwork"})
    } 
    ArtWork.update({
        name:req.body.name,
        artist:req.body.artist,
        image_url:req.body.image_url,
        description:req.body.description,
        date_created:req.body.date_created,
        type_id: req.body.type_id
    },{
        where:{
            id:req.params.id
        }
    }).then(editWork=>{
        if(!editWork[0]){
            return res.status(404).json({msg:"no art work with this id in database!"})
        }
        res.json(editWork)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

module.exports = router