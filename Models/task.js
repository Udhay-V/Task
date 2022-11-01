const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    
    name:String,
    mobileno:Number,
    emailid:String,
    password:String,
 
    Fullname:String,
    Emailid:String,
    Gender:String,
    Age:String,
    AlterNo:String
}
,{ timestamps: true});

module.exports = mongoose.model('task',taskSchema);