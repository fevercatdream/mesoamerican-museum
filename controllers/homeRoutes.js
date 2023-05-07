const router = require('express').Router();


router.get('/', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('index', {layout:false});
  });

  router.get('/catalog', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.render('catalog', {layout:false});
  });


module.exports = router;