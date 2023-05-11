const router = require('express').Router();
const { Employee, Civ, ArtType, ArtWork, Visitor } = require('../models')

router.get('/', async (req, res) => {
  
    res.render('index', {layout:false});
  });

  router.get('/catalog/:id', async (req, res) => {
    try{
      const dbArtbyType = await Civ.findByPk(req.params.id,{
        include:[
          {
            model:ArtType,
            attributes:['id','name'],
            include:[
              {
                model:ArtWork,
                attributes:['id','name','image_url']
              }
            ]
          }
        ]
      })
    
      const civs = dbArtbyType.get({plain:true})
      console.log(civs)
      console.log(civs.art_types[0].artworks)
      res.render('catalog', {layout:false,civs})
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  });

  router.get('/civart', async (req, res) => {
  
    res.render('civart', {layout:false});
  });

  router.get('/singleart/:id', async (req, res) => {
    try{
      const dbArtWork = await ArtWork.findByPk(req.params.id,{
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
        ]
      })
    
      const work = dbArtWork.get({plain:true})
      console.log(work)
      res.render('singleart', {layout:false,work})
    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
   
  });

  router.get('/updateitem', async (req, res) => {
    if(!req.session.isEmployee){
      res.status(403)
      return res.render('faillogin', {layout:false});
  } 
    res.render('updateitem', {layout:false});
  });
  router.get('/deleteitem', async (req, res) => {
  
    if(!req.session.isEmployee){
      res.status(403)
      return res.render('faillogin', {layout:false});
  } 
    res.render('deleteitem', {layout:false});
  });
  router.get('/usercollection', async (req, res) => {
  
    res.render('usercollection', {layout:false});
  });
  router.get('/additem', async (req, res) => {
    if(!req.session.isEmployee){
      res.status(403)
      return res.render('faillogin', {layout:false});
  } 
    res.render('additem', {layout:false});
  });
  router.get('/catalogoptions', async (req, res) => {
    if(!req.session.isEmployee){
      res.status(403)
      return res.render('faillogin', {layout:false});
  } 
    res.render('catalogoptions', {layout:false});
  });

  router.get('/notloggedin', async (req, res) => {
    res.render('faillogin', {layout:false});
  });





module.exports = router;