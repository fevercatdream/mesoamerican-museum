// Define the route for deleting an artwork
app.delete('/artworks/:id', async (req, res) => {
    try {
      // Find the artwork by ID
      const artwork = await Artwork.findByPk(req.params.id);
  
      // If artwork exists, delete it
      if (artwork) {
        await artwork.destroy();
        res.status(204).send();
      } else {
        res.status(404).send({ message: 'Artwork not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error deleting artwork' });
    }
  });
  