const express = require('express');
const fs = require('fs');
const connectDB = require('./config/db');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');



// Load Config File
const config = require('./config/config');

//Connect to database
connectDB();

// Route Files
const bookshipment = require('./routes/bookshipment');
const contactus = require('./routes/contactus');

const app = express();

if(config.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Body Parser
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'app/index.html'));
});


// URLS
app.use('/api/v1/bookshipment', bookshipment);
app.use('/api/v1/contactus', contactus);

app.use(errorHandler);

console.log("config.PORT  is "+ config.PORT );
const PORT = config.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${config.NODE_ENV} mode on port ${PORT}`.yellow.bold));


process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close Server and Exit Process
    server.close(() => {
        process.exit(1);
    })
})
