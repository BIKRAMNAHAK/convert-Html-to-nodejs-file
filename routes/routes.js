const express = require('express');
const routes = express.Router();


routes.get('/', (req, res)=>{
    res.render('index');
})

routes.get('/about', (req, res)=>{
    res.render('about');
});

routes.get('/shopping', (req, res)=>{
    res.render('shopping');
});

routes.get('/gallery', (req, res)=>{
    res.render('gallery');
});

routes.get('/contact', (req, res)=>{
    res.render('contact');
});


module.exports = routes;