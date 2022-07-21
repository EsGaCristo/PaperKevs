//! BORRAR ESTE DOCUMENTO

const { Router } = require("express");
const router = Router();


router.get('/',(req, res)=>{
    const data = {
        "name": "cris",
        "website": "prueba"
    };
    res.json(data);
});


module.exports = router;