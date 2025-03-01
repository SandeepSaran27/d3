const { timeStamp } = require("console");
const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
    shortID:{
        type: String,
        required: true,
    },
    redirectoryURL:{
        type: String,
    },
    history: [{timestamp : {type: Number}}],
    },
    { timeseries: true }
);
let name = "urlSandeep" + 1;
const URL = mongoose.model(name, URLSchema);

module.exports = URL;