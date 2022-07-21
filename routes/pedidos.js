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



router.get('/',(req,res)=>{
    text = "select  idventa , to_char(fechaventa,'YYYY-MON-DD') as fecha,total  from venta order by fechaventa  desc";
    //res.json(movies);

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Papeleria_Kevs',
        password: '7295',
        port: 5432,
        });

    client.connect();
    client.query(text)
        .then( response => {
            res.json(response.rows);
            client.end();
            return res.rows;
        })  
        .catch(error => console.log('Error  : ' + error.message))
});



module.exports = router;