const db = require('./routes/pedidos')

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser')

//* Settings 
app.set('port', process.env.PORT || 3000);

//* middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


//? routes
app.get('/api/pedidos',db.getDatos);
//app.post('/api/insertar/:id',db.insertDatos);
app.delete('/api/pedidos/:id',db.deleteVenta)

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${ app.get('port')  }`);
});