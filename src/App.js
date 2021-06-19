import './App.css';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Recipe from './Pages/Recipe';
import AddRecipe from './Pages/AddRecipe';


function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/add-recipe' component={AddRecipe}/>
      <Route exact path="/recipes/:recipeId" component={Recipe} /> 
    </Router>
  );
}

export default App;

