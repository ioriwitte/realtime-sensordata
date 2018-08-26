
const express = require( 'express')
const printf = require('printf')


// ####################################
var app = express()

app.use(express.static( 'public'));
app.use('/jorinde', express.static('public'))


app.listen( process.env.PORT || 5000)
console.log(printf("%-25s  %s","Listen on", process.env.PORT || 5000))
