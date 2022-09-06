import React, { Component, useState, useContext } from 'react';
import axios from "axios";
import { RecipeContext } from '../RecipeContext.jsx';
import { IngredientContext } from '../IngredientContext.jsx';
import { StyledSearch, StyledContainer, StyledColumn} from './StyledSearch.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Search() {

  const [dish, setDish] = useState('');
  const [cousine, setCousine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolarance, setIntolarance] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);

  const { recipesContext, updateRecipes, addRecipe } = useContext(RecipeContext);

  const handleSubmit = (event) => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR}&query=${dish}&cuisine=${cousine}&diet=${diet}&intolerances=${intolarance}`).then((res) => {
      console.log(res)
      setRecipes(res.data.results);
    });
  };

  const handleSubmitRecipe = (newRecipeAdded) => {
    console.log("recipe addded1")
    axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR}&ids=${newRecipeAdded.id}`).then((res) => {
    const {id, title, extendedIngredients, image} = res.data[0];
    const ingredients = extendedIngredients.map(ingredient => ingredient.name);
    const recipeToBeAdded = {id, title, ingredients, image};
    addRecipe(recipeToBeAdded);
    console.log("recipe addded2")
    });    
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);    


  return (
    <StyledSearch className="column-middle">
      <StyledContainer>
        <h2>Search</h2>
        <input placeholder='What dish are you looking for?' value={dish} onChange={(e) => setDish(e.target.value)} />
      </StyledContainer>
      <div>
        <p>Filter Area</p>
        <label>Cousine</label>
        <select onChange={(e) => setCousine(e.target.value)}>
          <option></option>
          <option>African</option>
          <option>American</option>
          <option>Italian</option>
          <option>Latin American</option>
          <option>Japanese</option>
          <option>Mediterranean</option>
        </select>
        <label>Intolerance</label>
        <select onChange={(e) => setIntolarance(e.target.value)}>
          <option></option>
          <option>Dairy</option>
          <option>Egg</option>
          <option>Gluten</option>
          <option>Grain</option>
          <option>Seafood</option>
          <option>Wheat</option>
        </select>
        <label>Diet</label>
        <select onChange={(e) => setDiet(e.target.value)}>
          <option></option>
          <option>Vegetarian</option>
          <option>Lacto-Vegetarian</option>
          <option>Ovo-Vegetarian</option>
          <option>Vegan</option>
          <option>Pescetarian</option>
          <option>Paleo</option>
        </select>
        <button onClick={handleSubmit}>Search</button>
        </div>
        <div>
          <StyledColumn>
            {recipes.map((recipe) => 
              <div key={recipe.id} >
              <img src={recipe.image} width="50" height="60"></img>
              <p>{recipe.title}</p>
              <button onClick={() => handleSubmitRecipe(recipe)}>Add</button>
              <button variant="primary" onClick={handleShow}>More</button>

              <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>{recipe.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Ingredients</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
              </Modal>

              </div>
            )}
          </StyledColumn>
        </div>
      </StyledSearch>
  );
}