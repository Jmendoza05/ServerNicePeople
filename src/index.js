const app = require('./app');
const conectarDB = require('./database');


conectarDB();

app.listen(app.get('port'),() =>{
    console.log("Server Success on port",app.get('port'));
});

