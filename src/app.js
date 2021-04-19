const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require("./WheatherAPP/andrew.js")

const app = express()

const port = process.env.PORT || 3000

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

app.listen(port, () => {
    console.log('Server is up on port '+port)
})

/*ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC783AfU2wKWh2jSeteGOY6I4QVURTXTKrAv6Dk3CQXvjGLfmx
1VuTYaxs6GR3U4+deEYsIoVsVlCz8eUUNv5NXyEGvVYyFou24ZhyPPuhL/mVTpt5YsiZs+OOCra9DMgxwooPzVty
iRZsFMTv23uJmRNvqD+4XuWhbhDVB3nSdb4AwsckbQqOh1rLjUNTchEtry6jmpRTRcsWVpn42p5N0ZdQhaT1XzbX8AQjj
3nwdHADWfMuC2tINmGHsNAsWk/61r9eQlDEcKx/EwFZ//HiYu68O+VYpEoqnkHx594zDOBynzFhZZxj7MerW0ieSR3Do4W
MbHxf24ktywNzo3Yt7En6bsXigPL+8lUMeAhQiXo+DWLSGYzkrVrEoZrL1NkXssG8CHesfDq116yPyIK/l/AXd2ZtA9eGtXP
VW9dezugtfsjrQTRiQb4slL7d4ijZbe58n+3RTC3OH/9qqZMBtbgLEugcEF/nbMpffTBUDetygq1zCHatlRdlh00B4N0IYRjb
BBsOKHEVjR02vTm61qNezuxeIxCVx9wEQIlZQAlX7CGpyT7ZTsn3EK5wBoTgoVyYvwsii+5LuhxwAKSfVnZIPYcq6PKSELNgd
Gh9XOTEEjffd5TRkxpUOmy4onUFFPFC9aAYHv9sNbtJWkQWlFqbR5YfbnXonpBmFgOQjNQ== rajkumargaunder.rkg.rkg@gmail.com*/
