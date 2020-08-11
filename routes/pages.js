const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.json( { msg: 'hello world'});
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;


//Router for pages. Should include:
//GET /stories - Main landing page when a user first logs in.
//GET /stories/:id - Individual story page based upon that story's ID.
//GET /stories/drafts - Should display all user's stories currently in draft format (awaiting publish).
//GET /stories/public - Should display all user's stories that have been published.
//POST /stories/new-story - Create a story and save it into the database.
//PUT /stories/:id/edit-story - Edit an existing story and update.
//GET /users/:id - Redirect to the users profile page.
