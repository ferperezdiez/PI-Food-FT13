const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const get = require('./get.js')
const router = Router();

// Configurar los routers
 router.use('/', get);
//router.use('/recipes', post);


module.exports = router;
