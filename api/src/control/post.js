const {Recipe, Diets, UserData} = require('../db');
const {v4: uuidv4} = require('uuid');

async function createRecipe (req, res, next) {
    const id = uuidv4();
    const recipe = {...req.body, id};
    const {diet} = req.body
    if(!req.body.title || !req.body.resume) {
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
                         title: req.body.title
                        },
                        include: Diets
            });
            res.send(findCreated);}
        catch(error){
            next(error)
        }
}

module.exports = {
    createRecipe,
}