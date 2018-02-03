// import express from 'express';
var express = require('express')
var app = express()
//using pug as a view engine
app.set ('view engine', 'pug');

//this is for rendering a string via express 
// app.get('/', (req, res) => {
//     res.send("Hello World!!!");
// })

//this is for rendering a pug template
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/charles', (req,res) => {
    res.render('chaplin')
})

//give the option of changing the port via command line
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

