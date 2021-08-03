import './App.css'; 
import LandingPage from './components/landing/landingPage';
import Home from './components/home/home';
import Form from './components/createRecipe/createRecipe';
import { Route } from "react-router-dom";
import RecipeDetail from './components/recipeDetail';


function App() {
  return (
    <div className="App">     
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>  
      <Route path="/create" component={Form}/>    
      <Route path="/home/:id" render={({match}) => <RecipeDetail match={match}/>}/>      
    </div>
  );
}

export default App;
