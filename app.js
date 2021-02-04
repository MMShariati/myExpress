const express = require('express');
const app = express();
const things = require('./routes/things');
const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "public")));



app.use('/', (req, res, next) => { 
    console.log(1);
    req.test = "test";
    next();
});


// console.log(__dirname);


app.get('/', (req, res) => {   
    console.log(2, req.test);

    res.sendFile(path.join(__dirname, 'public/login.html'))
});




app.use('/things', things)


app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})