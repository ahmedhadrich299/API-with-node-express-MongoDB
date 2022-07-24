const express = require('express')
const app = express() // object of type express have methods : get, post,put, delete 
const mongoose = require('mongoose')

//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})

//Connect to DB
mongoose.connect(
    { useNewUrlParser: true },
    () => console.log("connected to DB")
)

//start listening to the server 
app.listen(3000)