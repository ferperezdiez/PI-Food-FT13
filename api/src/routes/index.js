const { Router } = require('express');

const get = require('./get.js')
const post = require('./post.js')
const router = Router();


 router.use('/', get);
 router.use('/', post);



module.exports = router;
