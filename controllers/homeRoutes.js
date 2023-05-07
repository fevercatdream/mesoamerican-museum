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
  router.get('/additem', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('additem', {layout:false});
  });
  router.get('/olmac', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('olmac', {layout:false});
  });
  router.get('/maya', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('maya', {layout:false});
  });
  router.get('/inca', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('inca', {layout:false});
  });
  router.get('/aztec', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('aztec', {layout:false});
  });
  router.get('/catalogoptions', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('catalogoptions', {layout:false});
  });








module.exports = router;