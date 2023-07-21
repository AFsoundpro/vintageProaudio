const express = require('express');
const router = express.Router();


//Rutas

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', {title: "Vintage Pro Audio CO"});
});

module.exports = router;