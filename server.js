// Load .env variables when in dev mode
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
};
// Load Express.js
const express = require("express");
const app = express();

// Cookie Parser
const cookieParser = require("cookie-parser");
app.use(cookieParser("verydarksecret"));

// Cors
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Passport
const passport = require("passport");
require("./config/passport")(passport);

const flash = require("connect-flash");
const session = require("express-session");

app.use(express.static("public"));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(express.json());

// Manage database connection using Mongoose
const db = require("./config/db.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL,
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connected to Mongoose");
        db.dbinit();
    })
    .catch((error) => console.error(error));

// Express session
app.use(session({
    secret: "verydarksecret",
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global vars for msgs
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
});

// Routes
app.use("/user", require("./routes/user.routes"));
app.use("/store", require("./routes/store.routes"));
app.use("/delivery", require("./routes/delivery.routes"));
app.use("/slot", require("./routes/slot.routes"));
app.use("/", require("./routes/index"));

// Run web server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});