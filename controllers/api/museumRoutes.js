const express = require("express");
const router = express.Router();
const { Museum, Civ, ArtType, ArtWork, User } = require('../../models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    Museum.findAll()
      .then((mus) => {
        res.json(mus);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });

  router.post("/",(req,res)=>{
    Museum.create({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        username:req.body.username,
        password: req.body.password
    }).then(mus=>{
        res.json(mus)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    })
})

router.post("/login", (req, res) => {
    //collect unique user login info and password, req.body
    //find the matching record in the database
    Museum.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((foundMus) => {
      //ensure user exists
        if(!foundMus){
          return res.status(401).json({msg:"invalid username/password"})
        }
        //compare provided password with database password
        // if(bcrypt.compareSync(req.body.password,foundMus.password)){
        if(req.body.password===foundMus.password){
          req.session.userId = foundMus.id;
          req.session.musName=foundMus.name;
          return res.json(foundMus);
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
    Museum.findByPk(req.params.id)
      .then((musData) => {
        res.json(musData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
      });
  });
  
  module.exports = router