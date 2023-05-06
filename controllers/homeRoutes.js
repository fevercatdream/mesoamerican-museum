const router = require('express').Router();


router.get('/', async (req, res) => {
    //change this res.send to be res.render and then the name of the views file
    res.send('this is the homepage');
  });


module.exports = router;