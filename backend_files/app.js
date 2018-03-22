const express = require("express");
const app = express();
const users = require("./models/db");

// make a get request
app.get("/", (req, res) => {
    res.send("Hello, made a change!");
});

// app.get("*", function(req, res){
//     res.send("404");
// });

// app has to know where to listen for the request
app.listen(3000, () => {
    console.log("App is listening on port 3000");
});

// if you go to "localhost:3000" on your browser, you will see
// the 'get' request being run (here, will show "Hello, this is
// working!").

// show all users
app.get("/users", (req, res) => {
    res.send(users);
});

//show a specific user
app.get("/users/:id", (req, res) => {
    let user = users[req.param.id];
    if (user) {
        req.send(user);
    }
});