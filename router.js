const express = require('express')
var cors = require('cors');    
const router = express.Router()

router.use(
    cors({
         credentials: true,
         origin:[
             '*',
             'http://localhost:5600',
             'localhost:5600',
             ]
         })
      );

router.get('/', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS"); 
    res.render('index')
})

router.get('/search', function(req, res) {
    res.render('search')
})
router.get('/shop', function(req, res) {
    res.render('shop')
})
router.get('/checkout', function(req, res) {
    res.render('checkout')
})
router.get('/contact', function(req, res) {
    res.render('contact')
})

module.exports = router
