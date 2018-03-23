const express = require("express");
const router = express.Router();

const users = require("../models/db");

// will render the "home.ejs" file
const fetchHome = (req, res) => {
    res.render("home");
};

const fetchUsers = (req, res) => {
    res.send(users);
};

const fetchUserById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    console.log(users[id]);
    if (users[id]) {
        res.render("user_template", {person: users[id]});
    } else {
        console.log("Couldn't find the user");
        res.redirect("/users");
    }
};

router.get("/", fetchHome);
router.get("/users", fetchUsers);
router.get("/users/:id", fetchUserById);

module.exports = router;
