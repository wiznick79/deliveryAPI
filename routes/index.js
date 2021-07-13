const express = require("express");
const router = express.Router();
const path = require("path");
const { ensureAuthenticated, ensureAuthenticatedAdmin } = require("../config/auth");

router.use(express.static(path.resolve(__dirname, "../react-app/build")));

// Redirect to the React app
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/user/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/user/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/user/dashboard", ensureAuthenticated, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/admin/dashboard", ensureAuthenticatedAdmin, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/admin/createstore", ensureAuthenticatedAdmin, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

router.get("/admin/createslot", ensureAuthenticatedAdmin, (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});

/*
router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../react-app/build", "index.html"));
});
*/

module.exports = router;