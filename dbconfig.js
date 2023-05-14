const mongoose = require('mongoose');
const env = require("dotenv").config();


mongoose.connect(process.env.DB)


