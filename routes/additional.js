const express = require('express')
const path = require('path');

const router= express.Router();

router.get('/', (req, res) => {
    res.render('home');
  })

router.get('/contact', (req, res) => {
    res.render('contact');
  })

router.get('/blog', (req, res) => {
    res.render('blog');
  })
  
  router.get('/about', (req, res) => {
    res.render('about');
  })
  
  router.get('/service', (req, res) => {
      res.render('services');
  })


module.exports= router;
