const { Router } = require('express');
const { getRecipes, getTypes, getRecipe } = require('../control/get.js')
const router = Router();




router.get('/recipes', getRecipes);
router.get('/types', getTypes);
router.get('/recipes/:id', getRecipe)


module.exports = router;