// Dependencies
const morgan = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); //Serving static files in Express


//for mongo db
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})


// routes
require("./routes/api")(app);
require("./routes/htmlRoutes")(app);

// Server listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});