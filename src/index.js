const { renderFile } = require('ejs');
const express = require('express'); 
const servidor = express();
const path = require('path');

//configuracion

servidor.set('puerto', 4000);
servidor.set('views', path.join(__dirname, 'vistas'));
servidor.engine('html', require('ejs').renderFile);
servidor.set('view engine', 'ejs');

//midlewares



//rutas
servidor.use(require('./Routes/index'));

//static files

servidor.use(express.static(path.join(__dirname, 'public')));


//escuchando servidor

servidor.listen(servidor.get('puerto'), () => {
    console.log('servidor en puerto', servidor.get('puerto'));
});

