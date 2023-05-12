const express = require('express');
const router = express.Router();
const {ArtWork} = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      const existingLike = await ArtWork.findOne({
        where: {id: req.params.id},
      });
     const currentLikes = existingLike.get({plain:true})
      res.json(currentLikes.num_likes);
  } catch (error) {
      console.error('Error liking artwork:', error);
      res.status(500).json({ message: 'Error liking artwork' });
  }
  });


router.put('/:id', async (req, res) => {
  try {
    const existingLike = await ArtWork.findOne({
      where: {id: req.params.id},
    });
   const currentLikes = existingLike.get({plain:true})
   const LikeCount = currentLikes.num_likes + 1;
   const updatedLikes =  await ArtWork.update({
    num_likes:LikeCount
},{
   where: {
       id:req.params.id
   }
 
}
)
    res.json(updatedLikes);
} catch (error) {
    console.error('Error liking artwork:', error);
    res.status(500).json({ message: 'Error liking artwork' });
}
});
module.exports = router;