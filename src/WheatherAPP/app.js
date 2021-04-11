const request = require('request')

// const weatherSatckurl = 'http://api.weatherstack.com/current?access_key=a2f002ad2bc4b0f40c8e0e93c243abd0&query=New%20York&units=f'

// request({url:weatherSatckurl,json:true},(error,response)=>{
// // const data = JSON.parse(response.body)
// //console.log(error)
// if(error){
// console.log("Turn on your data..")
// }else if(response.body.error){
//    console.log('Check your URL..')
// }else{
//     console.log(response.body.current.weather_descriptions[0]+" .the temperature is "+response.body.current.temperature+" degrees. it feels like "+response.body.current.feelslike+" degrees out.")
// }

// })


// request({url:weatherSatckurl,json:true},(error,{body})=>{
// // const data = JSON.parse(response.body)
// //console.log(error)
// if(error){
// console.log("Turn on your data..")
// }else if(body.error){
//    console.log('Check your URL..')
// }else{
//     console.log(body.current.weather_descriptions[0]+" .the temperature is "+body.current.temperature+" degrees. it feels like "+body.current.feelslike+" degrees out.")
// }

// })


// const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/515%2015th%20St%20NW%2C%20Washington%2C%20DC%2020004.json?types=address&access_token=pk.eyJ1IjoicmFqa3VtYXI2MjUiLCJhIjoiY2tscDZ6cnVpMHp5NTJxbm52ZmkyMmI1dCJ9.8hr481W36-36SssKOyrrHA'

// request({url:mapBoxUrl,json:true},(error,response)=>{
//     if(error){
//         console.log("Turn on your data..")
//     }
//     else if(response.body.features.length===0){
//         console.log('Check your URL..')
//     }else{
//         console.log('latitude : '+ response.body.features[0].center[0])
//         console.log('longitude: '+ response.body.features[0].center[1])
//     }
    
// })

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=address&access_token=pk.eyJ1IjoicmFqa3VtYXI2MjUiLCJhIjoiY2tscDZ6cnVpMHp5NTJxbm52ZmkyMmI1dCJ9.8hr481W36-36SssKOyrrH'
    request({url:url,json:true},(error,response)=>{
        if(error){
          callback('Unable to connect to location services!',undefined)
        }else if(response.body.features.length===0){
         callback('Unable to find location.Try another search',undefined)
        }else{
            callback(undefined,{
              latitude:response.body.features[0].center[0],
              longitude:response.body.features[0].center[1],
              location:response.body.features[0].place_name
            })
        }
    })
}

geocode('45,-75',(error,data)=>{
     console.log('Error',error)
     console.log('Data',data)
})

const forecast = (x,y,callback)=>{
    const weatherSatckurl = 'http://api.weatherstack.com/current?access_key=a2f002ad2bc4b0f40c8e0e93c243abd0&query='+address+'&units=f'
    request({url:weatherSatckurl,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to network!',undefined)
        }else if(body.error){
            callback('Unable to find location.Try another search',undefined)
        }else{
            callback(undefined,{
             describe: body.current.weather_descriptions[0],
            temperature:body.current.temperature,
            fells:body.current.feelslike
         })
         }
    })
}
const address= process.argv[2]

//New%20York

if(!address){
    console.log('Please provide an address!')
}else{

    forecast(address,(error,{temperature}) => {
        console.log('Error',error)
        console.log('temperature',temperature)
    })
    
}

