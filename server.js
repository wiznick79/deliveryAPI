// Load .env variables when in dev mode
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
// Load Express.js
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

// Set view engine and folders
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
// Parse JSON bodies
app.use(express.json())

// Manage database connection using Mongoose 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

// run web server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Web Server started on port ${PORT}`)
})