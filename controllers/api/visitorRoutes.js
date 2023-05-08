const express = require("express");
const router = express.Router();
const { Museum, Civ, ArtType, ArtWork, User,favorites } = require('../../models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    User.findAll({include:favorites})
      .then((use) => {
        res.json(use);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

  router.post("/",(req,res)=>{
    User.create({
        username:req.body.username,
        password: req.body.password,
        artwork_id: req.body.artwork_id
    }).then(use=>{
        res.json(use)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/login", (req, res) => {
    //collect unique user login info and password, req.body
    //find the matching record in the database
    User.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((foundUse) => {
        if(!foundUse){
          return res.status(401).json({msg:"invalid username/password"})
        }
        if(bcrypt.compareSync(req.body.password,foundUse.password)){
          req.session.userId = foundUse.id;
          req.session.username=foundUse.name;
          return res.json(foundUse);
        } else {
          return res.status(401).json({msg:"invalid username/password"})
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });
  

  router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.json(req.session);
  })
  
  router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
      .then((useData) => {
        res.json(useData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

  router.put("/:id",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"you need to log in first to update a user"})
    } 
    User.update({
        username:req.body.username,
        password: req.body.password,
        liked_subject_id: req.body.liked_subject_id,
        artwork_id:req.body.artwork_id

    },{
        where:{
            id:req.params.id
        }
    }).then(editWork=>{
        if(!editWork[0]){
            return res.status(404).json({msg:"no user with this id in database!"})
        }
        res.json(editWork)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})
  module.exports = router