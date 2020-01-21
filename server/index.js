const express = require('express')
const cors = require('cors')

const indexRoutes = require('./routes/index')
const newsRoutes = require('./routes/news')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.options('*', cors())

app.use('/', indexRoutes);
app.use('/news', newsRoutes)

app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT)
})