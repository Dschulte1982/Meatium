const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
  res.send( 'this will be the profile page?' );
})

router.post('/token', (req, res, next) => {
  res.json({message: "success"});
});


module.exports = router;
