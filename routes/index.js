
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const router = vertex.router()

router.get('/', function(req, res){
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/auth', function(req, res){
	res.render('auth',null)
})

router.get('/landing', function(req, res){
	res.render('landing', null)
})

router.get('/contact', function(req, res){
	res.render('contact', null)
})



module.exports = router
