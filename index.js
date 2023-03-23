const express = require('express')
const app = express()
const user = require('./user.json')

app.use(express.json())

app.get('/user', (req, res) => {
    res.status(200).json(user)
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = user.find(user => user.id === id)
    res.status(200).json(user)
})

app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = user.find(user => user.id === id)
    user.splice(user.indexOf(user),1)
    res.status(200).json(user)
})

app.put('user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = user.find(user => user.id === id)
    user.user = req.body.user,
    user.mdp = req.body.mdp,
    res.status(200).json(user)
})

app.post('/user', (req, res) => {
    user.push(req.body)
    res.status(200).json(user)
})
 

app.listen(8080, () => { 
    console.log("server go") 
})