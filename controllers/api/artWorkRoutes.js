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
    ArtWork.findByPk(req.params.id,{  
        include:[
        {
          model:ArtType,
          attributes:['id','name'],
          include:[
            {
              model:Civ,
              attributes:['name']
            }
          ]
        }
      ]}).then(work=>{
        if(!work){
            return res.status(404).json({msg:"no art work with that id in database!"})
        }
        res.json(work)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/",async(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to post an artwork"})
    } 
    console.log(req.body)
    try{
        const civ = await Civ.findOne({
            where: {name:req.body.civ}, 
            include:[
                {
                  model:ArtType,
                  attributes:['id','name']
                }
              ]
        })
       const civType = civ.get({plain:true})
       console.log(civType)
       async function findType (civ2Find){
            typeArry = civ2Find.art_types
            console.log('type Array', typeArry)
            for (let i = 0; i < typeArry.length; i++) {
             const type = typeArry[i];
             console.log('type', type)
             if (type.name === req.body.typeName){
                const typeID = type.id
                return typeID
             }
        }
        }
        const foundType = await findType(civType)
        console.log('found type',foundType)
        const art2Create = await ArtWork.create({
             name:req.body.name,
             artist:req.body.artist,
             image_url:req.body.image_url,
             description:req.body.description,
             date_created:req.body.date_created,
             type_id: foundType,
             artTypeId: foundType
         })
         res.json(art2Create)
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }

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

router.put("/:id",async(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to update an artwork"})
    } 
    console.log(req.body)
    try{
        const civ = await Civ.findOne({
            where: {name:req.body.civ}, 
            include:[
                {
                  model:ArtType,
                  attributes:['id','name']
                }
              ]
        })
       const civType = civ.get({plain:true})
       console.log(civType)
       async function findType (civ2Find){
            typeArry = civ2Find.art_types
            console.log('type Array', typeArry)
            for (let i = 0; i < typeArry.length; i++) {
             const type = typeArry[i];
             console.log('type', type)
             if (type.name === req.body.typeName){
                const typeID = type.id
                return typeID
             }
        }
        }
        const foundType = await findType(civType)
        console.log('found type',foundType)
        const art2Update = await ArtWork.update({
             name:req.body.name,
             artist:req.body.artist,
             image_url:req.body.image_url,
             description:req.body.description,
             date_created:req.body.date_created,
             type_id: foundType,
             artTypeId: foundType
         },{
            where: {
                id:req.params.id
            }
          
         }
        )
        console.log(art2Update[0])
        if(art2Update[0] == 0){
            return res.status(404).json({msg:"no art work with this id in database!"})
        }
         res.json(art2Update)
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

module.exports = router