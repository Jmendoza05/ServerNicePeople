const express = require('express');
const cors = require('cors');
const conectarDB = require('./database');
const app = express();
app.set('port',process.env.PORT || 4000);
app.use(express.json());
app.use(cors());
conectarDB();
app.use('/api/contenidos',require('./routes/contenidos.routes'));
app.listen(app.get('port'),() =>{
    console.log("Server Success on port",app.get('port'));
});
module.exports = app;
