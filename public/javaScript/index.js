const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')



weatherform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = search.value
    msg1.textContent = 'Loading...'
    msg2.textContent = " "

    if(!location){
        msg1.textContent = "Please enter location!"
    }else{
        fetch('http://api.weatherstack.com/current?access_key=a2f002ad2bc4b0f40c8e0e93c243abd0&query='+location).then((response) => {
            response.json().then((data) => {
                if(data.error){
                    msg1.textContent = "Unable to find loaction.Try another search..."
                }else{
                   // console.log(data)
                   
                    msg1.textContent = "The temperatur is currently "+data.current.temperature
                    msg2.textContent = "temperature Location is in "+data.location.region
                }
            })
        })
    }
   
   
   
})