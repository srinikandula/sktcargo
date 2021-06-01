const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
ObjectId = mongoose.Schema.ObjectId;
const ContactUs = new mongoose.Schema({
    firstname:{
        type:String,
        required: [true, 'Please Enter a First Name'],
        trim:true,
        maxlength:[50, 'First Name can not be more than 50 characters'],
    },
    lastname:{
        type:String,
        required: [true, 'Please Enter a Last Name'],
        trim:true,
        maxlength:[50, 'Last Name can not be more than 50 characters'],
    },
    email:{
        type:String,
        trim:true,
        maxlength:[50, 'Email can not be more than 50 characters'],
        required: [true, 'Email address is required'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message:{
        type:String,
        required: [true, 'Please Enter a Message'],
        trim:true,
    },
    createdAt: {
        type: Date,
        default: Date
    }
});



module.exports = mongoose.model('ContactUs', ContactUs);