const { Recipe, Diets } = require('../db');
const axios = require('axios').default;
const { Op } = require("sequelize");
require('dotenv').config();
const {  API_KEY } = process.env;


/* --Esta función devuelve un listado de recetas obtenidas tanto de la API 
como de la base de datos filtradas por tipo de dieta, palabra clave o búsqueda general.
La rutas comentadas son una versión utilizando promesas.
This function returns a list of recipes obtained from both the API and the DB, filtered by diet tipe,
keyword or general research. 
*/

async function getRecipes (req,res, next){
  if (req.query.diet) {
    try {
      const { diet } = req.query
      const recipiesApy = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=300`)
      const myRecipies = await Recipe.findAll({
        include: Diets
      })
      var resultado = myRecipies.concat(recipiesApy.data.results)
      var resultado2 = resultado.filter(recipe => recipe.diets.includes(diet)).slice(0, 99)
      if (resultado2.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
      res.send(resultado2)
    }
    catch (error) {
      next(error)
    }
  }
  else if (req.query.name) {
    try {
      const { name } = req.query
      const recipiesApy = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&query=${name}&number=100`)
      const myRecipies = await Recipe.findAll({
        where: {
          title: { [Op.iLike]: `%${name}%` }
        },
        include: Diets
      })
      var resultado = myRecipies.concat(recipiesApy.data.results)
      var resultado2 = resultado
      if (resultado2.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
      res.send(resultado2)
    }
    catch (error) {
      next(error)
    }
  }
  else {
    try {
      const recipiesApy = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)      
      const myRecipies = await Recipe.findAll({
        include: Diets
      })
      var resultado = myRecipies.concat(recipiesApy.data.results)
      if (resultado.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
      res.status(200).send(resultado)
    }
    catch (error) {
      next(error)
    }

  }
}

async function getTypes (req, res, next){
  try {result = await Diets.findAll()
    if (result.length > 0) return res.send(result)
    else {
      const dietss = []
      const dietsData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)      
      dietsData.data.results.forEach(result => {
          result.diets.forEach(result => {
            if (!dietss.includes(result)) {
              dietss.push(result)
            }
          })
        })       
          await dietss.forEach(result => {
            Diets.create({
              name: result
            })
          })       
          data = await Diets.findAll()
            return res.send(data)}
    }
    catch(error){
      next(error)
    }
}

async function getRecipe (req, res, next){
  const { id } = req.params
  if (id.length < 35) {
    try {const apiRecipes = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      let objectResponse = {
        vegetarian: apiRecipes.data.vegetarian,
        vegan: apiRecipes.data.vegan,
        glutenFree: apiRecipes.data.glutenFree,
        title: apiRecipes.data.title,
        image: apiRecipes.data.image,
        diets: apiRecipes.data.diets,
        dishTypes: apiRecipes.data.dishTypes,
        summary: apiRecipes.data.summary,
        spoonacularScore: apiRecipes.data.spoonacularScore,
        healthScore: apiRecipes.data.healthScore,
        analyzedInstructions: apiRecipes.data.analyzedInstructions
      }
      if (apiRecipes) return res.send(objectResponse)}
      catch(error){
        next(error)
      }
    }   
  else {
    try {const dbRecipeId = await Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: Diets
    })
      return res.send(dbRecipeId)}
    catch(error){
      next(error)
    }    
  }
}



module.exports = {
  getRecipes,
  getTypes,
  getRecipe
}