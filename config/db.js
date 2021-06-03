const mongoose = require('mongoose');
config = require('./config.json');
const connectDB = async() => {
    console.log(config.mongo.host + config.username + config.password + config.db)
    let mongoUrl = "mongodb://localhost/cargo"
    if(!config.mongo.host) {
        console.error("mongo host is missing");
    } else if(!config.mongo.port) {
        console.error("mongo port is missing");
    } else if(!config.mongo.database) {
        console.error("mongo database is missing");
    } else if(config.mongo.username && config.mongo.password) {
        mongoUrl = "mongodb://"+config.mongo.username+":"+config.mongo.password+"@"
            +config.mongo.host+":"+config.mongo.host+"/"+config.mongo.database;
    } else {
        mongoUrl = "mongodb://"+config.mongo.host+":"+config.mongo.host+"/"+config.mongo.database;
    }
    console.log("mongoUrl " + mongoUrl);
    const conn = await mongoose.connect(mongoUrl, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
     });
     console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
