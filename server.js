const express = require('express')
const app = express()
const PORT = 8000

//set up the server to hear a request and generate a response
//app.get('path or route', '(request to listen for, this is what we want the server to respond with)=>{}' )
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    //__dirname + '/index.html' this says we look for the file in the current directory

})

//use the url to obtain the request
app.get('/api/:cityName', (request,response)=>{
    const cityName = request.params.cityName.toLowerCase()
    console.log(cityName)
})

//want to store data in database instead of having response as an object in our server-side api
//What about accessing someone elses database? What about storing data? What makes sense to store from my api? why server side api vs web based?
//weather info: api.weatherapi.com
//language: https://stefanbohacek.com/project/hellosalut-api/

// tell the server to listen at a particular port (defined above)
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}. Well done!`)
})