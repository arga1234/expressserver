const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const hbs = require('hbs')

const app = express()
// Defines paths for Express Config
const staticFile = path.join(__dirname, '/public')
const viewPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

// Setup Handlebars
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(staticFile))

// Parse request of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Parse request of content type 
app.use(bodyParser.json())

app.get('', (req, res)=>{
    res.render('index', {
        title : 'Weather App', 
        name : 'Arga Wirawan'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title : 'About Page', 
        name : 'Arga Wirawan'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title : 'Help Page', 
        name : 'Arga Wirawan', 
        text : 'This is the help text'
    })
})


app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})