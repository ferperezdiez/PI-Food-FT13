const { Router } = require('express');
require('dotenv').config();
const {Recipe, Diets} = require('../db');
const axios = require('axios').default;
const {v4: uuidv4} = require('uuid');
const { Op } = require("sequelize") 

const {
    API_KEY
  } = process.env;
  

// importar modelos

const router = Router();

// router.get('/recipes/all', (req, res, next) => {     
//     const recipiesApy = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
//     const myRecipies = Recipe.findAll({
//       include: Diets })    
//         Promise.all([recipiesApy, myRecipies])
//         .then(response => { 
//             var  [recipiesApyResponse, myRecipiesResponse] = response                      
//             var resultado = myRecipiesResponse.concat(recipiesApyResponse.data.results)                     
//             if(resultado.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
//             res.send(resultado)})
//         .catch((err) => next(err))    
    
//     });

router.get('/recipes', (req, res, next) => { 

  if(req.query.diet){
    const {diet} = req.query
    const recipiesApy = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=300`)
    const myRecipies = Recipe.findAll({
          include: Diets })    
        Promise.all([recipiesApy, myRecipies])
        .then(response => { 
            var  [recipiesApyResponse, myRecipiesResponse] = response                      
            var resultado = myRecipiesResponse.concat(recipiesApyResponse.data.results)         
            var resultado2 = resultado.filter(recipe => recipe.diets.includes(diet)).slice(0, 99)         
            if(resultado2.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
            res.send(resultado2)})
        .catch((err) => next(err))    
      }
      else if(req.query.name){
        const {name} = req.query
        const recipiesApy = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&query=${name}&number=100`)
        const myRecipies = Recipe.findAll({
            where: {
              name: {[Op.iLike]: `%${name}%`}},
              include: Diets})    
            Promise.all([recipiesApy, myRecipies])
            .then(response => {
                var  [recipiesApyResponse, myRecipiesResponse] = response                      
                var resultado = myRecipiesResponse.concat(recipiesApyResponse.data.results)
                var resultado2 = resultado
                if(resultado2.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
                res.send(resultado2)})
            .catch((err) => next(err))}

            else {
              const recipiesApy = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
              const myRecipies = Recipe.findAll({
                include: Diets
              })
              Promise.all([recipiesApy, myRecipies])
                .then(response => {
                  var [recipiesApyResponse, myRecipiesResponse] = response
                  var resultado = myRecipiesResponse.concat(recipiesApyResponse.data.results)
                  if (resultado.length === 0) return res.status(404).send('no se encontraron recetas que coincidan con la búsqueda solicitada')
                  res.status(200).send(resultado)
                })
                .catch((err) => next(err))}
    });     


  router.get('/types', (req, res, next) => {
    Diets.findAll().then(result => {
      if(result.length > 0) return res.send(result)
      else {
        const dietss = []
          const dietsData = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
          dietsData.then(data => {  
            let dietsDataResult = data
            dietsDataResult.data.results.forEach(result => {          
            result.diets.forEach(result => {
              if (!dietss.includes(result)) {
                dietss.push(result)}})})})    
          .then(() => {      
          dietss.forEach(result => {      
          Diets.create({
          name: result})})})
          .then(dietResult => { 
          Diets.findAll().then(data => {         
          return res.send(data)})})
        .catch((err) => next(err))
        
      }
    })
    
  })

      router.get ('/recipes/:id', (req, res) => {
        const {id} = req.params
       if (id.length < 35) {
            const apiRecipes =  axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            apiRecipes.then(response => {
            const apiResponse = response
             let objectResponse = {
              vegetarian: apiResponse.data.vegetarian,
              vegan: apiResponse.data.vegan,
              glutenFree: apiResponse.data.glutenFree,
              title: apiResponse.data.title,
              image: apiResponse.data.image,
              diets: apiResponse.data.diets,
              dishTypes: apiResponse.data.dishTypes,
              summary: apiResponse.data.summary,
              spoonacularScore: apiResponse.data.spoonacularScore,
              healthScore: apiResponse.data.healthScore,
              analyzedInstructions: apiResponse.data.analyzedInstructions
            }
            if(apiResponse) return res.send(objectResponse)
          }).catch(err=> res.status(404).json({error: 'ID invalido'}))
        } else {
          const dbRecipeId = Recipe.findOne({
            where: {
              id: req.params.id
            }, 
            include: Diets
          }).then(response => {
            return res.send(response)
          }).catch(err=> res.status(404).json({error: 'ID invalido'})); 
        }
      })




  





module.exports = router;