// import express
const express = require('express');
const userrouter= require('./routers/userrouter');
const handicraftrouter = require('./routers/handicraftrouter')
const cors = require('cors')
// initialize express app

const app = express();

const port = 5500;


//middleware
app.use(cors(
    {origin:['http://localhost:3000']}
));

app.use(express.json());

app.use('/user',userrouter)
app.use('/handicraft',handicraftrouter)

app.get('/', (req, res) => {
    res.send("Response from express");

});

//getall
app.get('/getall',(re,res)=>{
    res.send("response from getall")
})
//update
app.get('/update',(re,res)=>{
    res.send("response from update")
})

app.get('/add',(req,res)=>{
    res.send('response from add route')
});

app.get('*',(req,res)=>{
    res.send('404 not found')
});

app.listen(port,() => { console.log('server started'); });
