const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require("./WheatherAPP/app.js")

const app = express()

const publicdirectory = path.join(__dirname, '../public')
const partialPath = path.join(__dirname, '../views/partials')


app.set('view engine', "hbs")
app.use(express.static(publicdirectory))
hbs.registerPartials(partialPath)



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Raj kumar M'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        help: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius officia repellat cupiditate quis, dolorem quae laudantium fugit  doloremque minus numquam eaque vitae dolores quos eveniet libero tenetur ea corrupti sint.",
        title: 'Help',
        name: 'Raj kumar M'
    })
})

app.get('/json',(req,res)=>{
    res.send({
        sunTv:"Anbe Vaa",
        ZeeTamil:"Thirumathu hitler"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: 'Raj kumar M'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:"You must provide the address"
        })
    }

 

    // res.send({
    //     forcast: '39 degree',
    //     location: 'Bangalore',
    //     address:req.query.address
    // })
})


app.get("/product",(req,res)=>{
    if(!req.query.search){
     return  res.send({
          error:"You must provide a search term"
      })
    }
  console.log(req.query)
    res.send({
        products:[]
    })
})



app.get('/help/*', (req, res) => {
    res.render('null', {
        title: "404",
        message: "Page not found"
    })
})

app.get('*', (req, res) => {
    res.render('null', {
        title: "Error 404",
        message: "page not found"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000...')
})