/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');
const {v4: uuidv4} = require('uuid');


const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  resume: 'llamas al delivery y la acompañas com papas fritas. También del delivery',
  id: uuidv4()
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe))
    .then(() => {
      describe('GET /recipes', () => {
        it('should get 200', () =>
          agent.get('/recipes').expect(200)
        );
      }) 
    }));    
});
