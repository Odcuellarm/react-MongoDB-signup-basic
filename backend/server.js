const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes');
const cors = require('cors');

mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true }).then(()=> {
    console.log('Connected to MongoDB...');
}).catch((error)=>{
    console.log('Something is worng');
})

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
app.listen(4000, ()=> console.log("Server is up and running"));