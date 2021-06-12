const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const get = require('./get.js')
const post = require('./post.js')
const router = Router();

// Configurar los routers
 router.use('/', get);
 router.use('/', post);



module.exports = router;
