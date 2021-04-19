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
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
// Parse JSON bodies
app.use(express.json())

// Manage database connection using Mongoose 
const db = require('./models')
const Role = db.role;

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Connected to Mongoose');
        dbinit();
    })    
    .catch(error => console.error(error))    

// Adds the user and admin roles in the database, if they don't exist
function dbinit() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({name: "user"}).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("Added 'user' to roles");
            });
            new Role({name: "admin"}).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("Added 'admin' to roles");
            });
        }
    })
}

app.use('/', indexRouter)

// run web server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})