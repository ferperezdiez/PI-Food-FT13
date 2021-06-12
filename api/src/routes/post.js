const {Recipe, DietType} = require('../db');
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
    // try {
        const createdRecipe = Recipe.create(recipe);
        createdRecipe.then(result => {
            for (var i=0; i < req.body.diet.length; i++){
            result.addDietType(diet[i], {through:'recipesDiet'})
            console.log(diet[i])
            }
        })
        .then(() =>{
            const findCreated = Recipe.findOne({
                         where: {
                         name: req.body.name
                        },
                        include: DietType
            });
            findCreated.then(result => res.send(result));
        })
            // for (var i=0; i < req.body.diet.length - 1; i++){
            //     result.addDietType(req.body.diet[i], {through:'recipesDiet'})
        //     const result = await Recipe.findOne({
        //         where: {
        //             name: req.body.name
        //         },
        //         include: DietType
        //     });
        //     return res.send(result);
        // } catch(error) {

    //     })
    //     }         
    //     next(error);
    // }
  
  })





module.exports = router;