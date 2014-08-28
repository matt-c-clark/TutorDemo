var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Find a Private Tutor | FindMyTutor' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Us | FindMyTutor' });
});

/* GET student sign up page. */
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Become a Student | FindMyTutor' });
});

/* GET tutor sign up page. */
router.get('/tutor-signup', function(req, res) {
  res.render('tutor-signup', { title: 'Become a Tutor | FindMyTutor' });
});

/* GET sign in page. */
router.get('/login', function(req, res) {
  res.render('login', { title: 'Sign In| FindMyTutor' });
});

module.exports = router;
