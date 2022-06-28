require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { db } = require('./helpers/mainHelper');


const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));





app.use(require('./app/routes/index'));




app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
