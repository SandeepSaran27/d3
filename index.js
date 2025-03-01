const express = require("express");
const mongoose = require("mongoose");
const PORT = 80;
/*const { connectToMongoose } = require("./first/connection");*/
const userRoutes = require("./routes/url");

const app = new express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const db_url = "mongodb+srv://23091a05j4:1234@cluster0.n2lgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Connect to mongoose
const result = mongoose.connect(db_url)
.then( ()=>{ console.log("MongoDB Connected");})
.catch( (err)=>{ console.log("Mongoose Error:", err);});

//Routes
app.use('/url', userRoutes);

//Connect to server
app.listen(PORT, ()=>{
    console.log("Server is connected");
});