import './App.css';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Context from './Context';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Recipe from './Pages/Recipe';
import AddRecipe from './Pages/AddRecipe';


function App() {

  const [recipes, setRecipes] = useState(
    [
      {
          id: 1,
          name: 'Паста',
          image: '/images/pasta.jpg',
          ingredients: {
              'Мука' : '200гр',
              'Яйца' : '2шт',
              'Базилик' : '100гр',
              'Песто' : '300гр',
              'Зелень' : '10гр',
              'Помидоры' : '200гр',
          },
          steps: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.'
          ]
      },
      {
          id: 2,
          name: 'Лосось',
          image: '/images/salmon.jpg',
          ingredients: {
              'Мука' : '200гр',
              'Яйца' : '2шт',
              'Базилик' : '100гр',
              'Песто' : '300гр',
              'Зелень' : '10гр',
              'Помидоры' : '200гр',
          },
          steps: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.'
          ]
      },
      {
          id: 3,
          name: 'Яйца',
          image: '/images/eggs.jpg',
          ingredients: {
              'Мука' : '200гр',
              'Яйца' : '2шт',
              'Базилик' : '100гр',
              'Песто' : '300гр',
              'Зелень' : '10гр',
              'Помидоры' : '200гр',
          },
          steps: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.'
          ]
      },
      {
          id: 4,
          name: 'Суп',
          image: '/images/soup.jpg',
          ingredients: {
              'Мука' : '200гр',
              'Яйца' : '2шт',
              'Базилик' : '100гр',
              'Песто' : '300гр',
              'Зелень' : '10гр',
              'Помидоры' : '200гр',
          },
          steps: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis at platea rhoncus aenean urna elementum donec enim. Sit leo, in in ac dapibus sapien, habitant turpis.'
          ]
      }
    ])

  const contextValue = {
    recipes,
    setRecipes
  }

  return (
    <Context.Provider value={contextValue}>
      <Router>
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/add-recipe' component={AddRecipe}/>
        <Route exact path="/recipes/:recipeId" component={Recipe} /> 
      </Router>
    </Context.Provider>
  );
}

export default App;

