const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
ObjectId = mongoose.Schema.ObjectId;
const BookShipment = new mongoose.Schema({
    fromcity:{
        type:String,
        required: [true, 'Please Enter a From City'],
        trim:true,
        maxlength:[50, 'Source City can not be more than 50 characters'],
    },
    destinationcity:{
        type:String,
        required: [true, 'Please Enter a Destination City'],
        trim:true,
        maxlength:[50, 'Destination City can not be more than 50 characters'],
    },
    email:{
        type:String,
        trim:true,
        maxlength:[50, 'Email can not be more than 50 characters'],
        required: [true, 'Email address is required'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobilenumber:{
        type:Number,
        required: [true, 'Please Enter a Mobile Number'],
        trim:true,
        maxlength:[10, 'Mobile Number can not be more than 10 characters']
    },
    contactperson:{
        type:String,
        required: [true, 'Please Enter a Contact Person Name'],
        trim:true,
        maxlength:[50, 'Contact Person Name can not be more than 50 characters'],
    },
    weight:{
        type:Number,
        required: [true, 'Please Enter a Weight'],
        trim:true,
        maxlength:[50, 'Weight can not be more than 50 characters'],
    },
    descriptionofgoods:{
        type:String,
        required: [true, 'Please Enter a Description Of Goods'],
        trim:true,
    },
    createdAt: {
        type: Date,
        default: Date
    }
});



module.exports = mongoose.model('BookShipment', BookShipment);