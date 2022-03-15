const express = require('express');
const router = express.Router();

//Route

router.get('/', function (req, res) {
    res.render('index',{title:'yo soy'});
  });

  router.get('/dashboard', function (req, res) {
    res.render('dashboard');
  });

  router.get('/product', function (req, res) {
    res.render('product');
  });

  router.get('/register', function (req, res) {
    res.render('register');
  });

  module.exports = router;