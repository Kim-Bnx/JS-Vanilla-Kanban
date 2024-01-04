require('dotenv').config();
const 
    express = require('express'),
    path = require('path'),
    router = require("./app/router"),
    cors = require("cors"),
    bodySanitizer = require('./app/middlewares/body-sanitizer'),
    multer = require("multer");

// Initialize Express
const app = express();

// Body-parser for POST method
app.use(express.urlencoded({ extended: true }));
// Handle formData
const mutipartParser = multer();
app.use(mutipartParser.none());
// Define JSON content type
app.use(express.json());

// Secutiry
app.use(cors('*'));
app.use(bodySanitizer);

// Root for static files
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});