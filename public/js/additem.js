const express = require('express');
const router = express.Router();
const Artwork = require('../models/Artwork');

router.post('/add-artwork', async (req, res) => {
  const { name, artist, image_url, description, date_created, type_id } = req.body;

  try {
    // Create the new artwork
    const artwork = await Artwork.create({
      name,
      artist,
      image_url,
      description,
      date_created,
      type_id,
    });

    res.status(201).send('Artwork added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
