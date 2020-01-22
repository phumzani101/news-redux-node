const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const indexRoutes = require('./routes/index')
const newsRoutes = require('./routes/news')
const authRoutes = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 4000
const dbURL = process.env.MONGO_DB_URL

mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true}, function (err) {
    if (err) {
        console.log('Error connecting to: ' + dbURL)
    }
    else {
        console.log('Connected to: ' + dbURL)
    }
})

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', indexRoutes);
app.use('/news', newsRoutes)
app.use('/user', authRoutes)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})