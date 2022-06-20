const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    id:String,
    sec:String,
    intrest:String,
    address:String,
    phone:Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;



