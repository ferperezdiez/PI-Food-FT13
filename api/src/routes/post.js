const {Recipe, Diets, UserData} = require('../db');
const {v4: uuidv4} = require('uuid');
const { Router } = require('express');
const { createRecipe } = require('../control/post');


const router = Router();


  router.post ('/recipes', createRecipe) 


module.exports = router;