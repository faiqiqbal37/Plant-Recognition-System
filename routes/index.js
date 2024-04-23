var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:5000/api/plants');
    if (response.ok) {
      const plants = await response.json();
      res.render('index', { plants });
    } else {
      throw new Error('Failed to fetch plant data');
    }
  } catch (err) {
    console.error('Error while fetching data: ', err);
    res.render('error', { message: 'Failed to fetch plant data' });
  }
});

router.get('/plantdetails', async (req, res) => {

    const plantid = req.query.plantid;
  try {
      const response = await fetch(`http://localhost:5000/api/plant_details/${plantid}`);
      if (response.ok) {
          const plantDetails = await response.json();
          res.render('plantdetails', {plantDetails});
      } else {
          throw new Error('Failed to fetch plant data');
      }

  } catch (err) {
    console.error('Error while fetching data: ', err);
    res.render('error', { message: 'Failed to fetch plant data' });
  }
});

module.exports = router;
