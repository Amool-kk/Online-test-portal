const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = require('./router/api');

app.use(cors());

app.use(bodyparser.json());

app.use((req,res,next) => {
    // console.log(req.body,"this");

    next();
})

app.use(api);

app.use(express.static('public'))

app.use((req, res, next) => {
    res.status(404).send("We think you're lost.");
})

app.use((err,req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'../public/error.html'))
})


const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log('listening on port '+port);
})