// Load .env variables when in dev mode
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
// Load Express.js
const express = require('express');
const app = express();

// Passport
const passport = require('passport');
require('./config/passport')(passport);

// const flash = require('connect-flash');
const session = require('express-session');

app.use(express.static('public'));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(express.json());

// Manage database connection using Mongoose 
const db = require('./models');
const Role = db.role;

const mongoose = require('mongoose');
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
};

// Express session
app.use(session({
    secret: 'dark secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true}
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

/*
// Connect flash
app.use(flash());

// Global vars for msgs
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
*/

// Routes
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/logout', require('./routes/logout'));

// run web server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});