const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const app = express()

const staticFile = path.join(__dirname, '/public')
app.set('view engine', 'hbs')
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
    res.send('<h1>Hello Express, This is about page</h1>')
})

app.get('/help', (req, res)=>{
    res.send('<h1>Hello Express, This is help page</h1>')
})

app.get('/weather', (req, res)=>{
    res.send('<h1>Hello Express, This is weather page<h1>')
})

app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})