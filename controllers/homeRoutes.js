const router = require('express').Router();


router.get('/', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('index', {layout:false});
  });

  router.get('/catalog', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('catalog', {layout:false});
  });

  router.get('/civart', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('civart', {layout:false});
  });

  router.get('/singleart', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('singleart', {layout:false});
  });

  router.get('/updateitem', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('updateitem', {layout:false});
  });
  router.get('/deleteitem', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('deleteitem', {layout:false});
  });
  router.get('/usercollection', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('usercollection', {layout:false});
  });





module.exports = router;