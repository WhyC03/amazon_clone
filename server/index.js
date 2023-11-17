const express = require("express");
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();
const DB = "mongodb+srv://Yash:Amogh2218@cluster-1.4csdyqv.mongodb.net/?retryWrites=true&w=majority"

app.use(authRouter);
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () =>{3
    console.log(`connected at port ${PORT}`)
});