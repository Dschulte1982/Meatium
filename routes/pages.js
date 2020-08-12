const express = require('express');
const router = express.Router();

<<<<<<< HEAD


router.get('/', (req, res) => {
  // res.json( { msg: 'hello world'});
  // res.render('login');
  res.render('welcome');

=======
const csrfProtection = require("csurf")({ cookie: true });

router.get('/login', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect('/');
    return;
  }
  res.render('login', { csrf: req.csrfToken() });
>>>>>>> c66914c2aa3c6478aaee1fbe8a40bc752cb74817
});

router.get('/signup', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect("/");
    return;
  }
  res.render("signup", { csrf: req.csrfToken() });
});

router.get('/', csrfProtection, (req, res) => {
  if (!req.user) {
    res.redirect("/login");
    return;
  }
  res.render("/", { username: req.user.username, csrf: req.csrfToken() });
});

router.get('*', (req,res) => {
  res.render('error-page');
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
