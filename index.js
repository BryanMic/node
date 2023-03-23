// const express = require('express')
// const app = express()

// const parkings = require('./parkings.json')
// // app.get('/parkings', (req, res) => {res.send("Parkings : ")} )
// app.get('/parkings', (req, res) => { res.status(200).json(parkings)} )

// app.listen(8080, () => { console.log("server go") })


const express = require('express')
const app = express()
const parkings = require('./parkings.json')
const user = require('./user.json')

app.use(express.json())

app.get('/parkings', (req, res) => {
    res.status(200).json(parkings)
})

app.get('/parkings/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const parking = parking.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.post('/parkings', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.get('/user', (req, res) => {
    res.status(200).json(user)
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = user.find(user => user.id === id)
    res.status(200).json(user)
})

app.post('/user', (req, res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})


app.listen(8080, () => { 
    console.log("server go") 
})



