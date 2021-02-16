const mongoose = require('mongoose');
const AutherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Auhor must htave a name!"],
        minlength: [3, "Name must be at least 3  characters!"],
        maxlength: [600, "Name must be less than 50 characters!"]
    }}, { timestamps: true });
module.exports.Auther = mongoose.model('Auther', AutherSchema);