const BookShipment = require('../models/Bookshipment');
const config = require('../config/config.json');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/aync');
const Contactus = require('../models/Contactus');


// Add New Shipment
exports.bookshipment = (async (req,res,next) => {
    try{

        let data = req.body;

        const shipment =  await BookShipment.create(data);

        res.status(201).json({
            success:true,
            data: shipment
        }); 
    }catch(err){
        console.log(err);

        if (err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new ErrorResponse(message, 400);
            next(err);
        }

        // if(err.code === 11000){
        //     console.log(err.message);
        //     const message = 'Type Pair Is Already Exits!';
        //     error = new ErrorResponse(message, 400);
        //     next(err);
        // }
    } 
});


exports.contactus = (async (req,res,next) => {
    try{

        let data = req.body;

        const contact =  await Contactus.create(data);

        res.status(201).json({
            success:true,
            data: contact
        }); 
    }catch(err){
        console.log(err);

        if (err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new ErrorResponse(message, 400);
            next(err);
        }

        // if(err.code === 11000){
        //     console.log(err.message);
        //     const message = 'Type Pair Is Already Exits!';
        //     error = new ErrorResponse(message, 400);
        //     next(err);
        // }
    } 
});