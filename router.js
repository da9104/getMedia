const express = require('express')
const router = express.Router()
var cors = require('cors');    


router.use(
    cors({
         credentials: true,
         origin:[
             'http://localhost:5600',
             'https://get--media.herokuapp.com',
             'get--media.herokuapp.com',
             'https://git.heroku.com/get--media.git',
         ]
        })
        );

router.get('/', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
  //  res.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "https://get--media.herokuapp.com")
    res.header("Access-Control-Allow-Origin", "get--media.herokuapp.com/")
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "1800");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS"); 
    res.render('index')
})

router.get('/search', function(req, res) {
    res.render('search')
})
router.get('/shop', function(req, res) {
    res.render('shop')
})
router.get('/contact', function(req, res) {
    res.render('contact')
})

module.exports = router