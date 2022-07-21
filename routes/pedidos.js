const { Router } = require('express');
//const _ = require('underscore')); //! ????
const router = Router();


const cors = require("cors");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors());

//* Agregaste lo de router.use y las dependencias cors y body

const {Client } = require('pg');

const client = new Client({
user: 'postgres',
host: 'localhost',
database: 'Papeleria_Kevs',
password: '7295',
port: 5432,
});

router.get('/',(req,res)=>{
    //res.json(movies);
    client.connect();
    client.query('select  * from venta order by "fechaventa"')
        .then( response => {
            res.json(response.rows);
            client.end();
            return res.rows;
        })  
        .catch(err =>{
            client.end();
        })
});



module.exports = router;