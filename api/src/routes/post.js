const {Recipe, Diets, UserData} = require('../db');
const {v4: uuidv4} = require('uuid');
const { Router } = require('express');

/* -- A través de esta ruta se realiza se realiza el posteo en base de datos de
una receta agregada por un usario asociándola con una o vario tipos de dietas seleccionadas 
desde el front.
La rutas comentadas son una versión utilizando promesas.

*/


const router = Router();

// router.post ('/recipes', (req, res, next) => {
//     const id = uuidv4();
//     const recipe = {...req.body, id};
//     const {diet} = req.body
//     if(!req.body.name || !req.body.resume) {
//         return res.status(404).send({ 
                 
//             message: "'nombre' y 'resumen del plato' son obligatorios",
//         });
//     }   
//         const createdRecipe = Recipe.create(recipe)
//         .then(result => {
//              for (var i=0; i < req.body.diet.length; i++){                
//             result.addDiets(diet[i], {through:'recipesDiet'})            
//             }
//         })
//         .then(() =>{
//             const findCreated = Recipe.findOne({
//                          where: {
//                          name: req.body.name
//                         },
//                         include: Diets
//             });
//             findCreated.then(result => res.send(result));
//         })
            
  
//   })


  router.post ('/recipes', async (req, res, next) => {
    const id = uuidv4();
    const recipe = {...req.body, id};
    const {diet} = req.body
    if(!req.body.name || !req.body.resume) {
        return res.status(404).send({ 
                 
            message: "'nombre' y 'resumen del plato' son obligatorios",
        });
    }   
        try {const createdRecipe = await Recipe.create(recipe)
        
             for (var i=0; i < req.body.diet.length; i++){                
                createdRecipe.addDiets(diet[i], {through:'recipesDiet'})            
            }
       
        
            const findCreated = await Recipe.findOne({
                         where: {
                         name: req.body.name
                        },
                        include: Diets
            });
            res.send(findCreated);}
        catch(error){
            next(error)
        }
  })

  
  

  


module.exports = router;