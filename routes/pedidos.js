const { response } = require('express');
const {Pool} = require('pg')
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'Papeleria_Kevs',
  password: '7295',
  port: 5432,
  }
const pool = new Pool(config);


const getDatos = (req,res)=>{
    var auxtxt = "select  idventa , to_char(fechaventa,'YYYY-MON-DD') as fecha,total  from venta order by fechaventa  desc";
    pool.query(auxtxt,(error,results)=>{
      if(error){
        throw error
      }
      res.status(200).json(results.rows)
      //return results.rows;
    })
}


//Metodo para borrar y ver si funciona
const deleteVenta  = (req,res)=>{
  const id = parseInt(req.params.id);
  pool.query('delete from venta  where  idventa = ?',[id],(error,filas)=>{
    if(error){
      throw error
    }
    res.send(filas)
  })
}

// post
const insertDatos = (req,res)=>{

  const {total,lat,lng} = req.body;
  let sql = "INSERT INTO venta (total,lat,lng) values ($1,$2,$3)"
              
  pool.query(sql,[total,lat,lng],(err,result)=>{
    if(err){
      throw err
    }
    res.send(result)
  })
  
}

module.exports = {
    getDatos,
    insertDatos,
    deleteVenta
}
/*
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

const insertK = (req,res)=>{
  console.log("probando insertar")
}

module.exports = router;
module.exports = insertK;

 */