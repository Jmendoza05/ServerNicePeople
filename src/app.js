const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');

const app = express();
app.set('port',process.env.PORT || 4000);
app.use(express.json());
app.use(cors());

///app.use(morgan('dev'));

app.use('/api/contenidos',require('./routes/contenidos.routes'));

module.exports = app;