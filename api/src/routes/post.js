const {Recipe, Diets} = require('../db');
const {v4: uuidv4} = require('uuid');
const { Router } = require('express');

const router = Router();

router.post ('/recipes', (req, res, next) => {
    const id = uuidv4();
    const recipe = {...req.body, id};
    const {diet} = req.body
    if(!req.body.name || !req.body.resume) {
        return res.send({ 
                 
            message: "'nombre' y 'resumen del plato' son obligatorios",
        });
    }
   
        const createdRecipe = Recipe.create(recipe)
        .then(result => {
            for (var i=0; i < req.body.diet.length; i++){
            result.addDiets(diet[i], {through:'recipesDiet'})            
            }
        })
        .then(() =>{
            const findCreated = Recipe.findOne({
                         where: {
                         name: req.body.name
                        },
                        include: Diets
            });
            findCreated.then(result => res.send(result));
        })
            
  
  })





module.exports = router;