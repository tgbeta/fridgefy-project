import React, { Component, useState, useContext } from 'react';
import axios from "axios";
import { RecipeContext } from '../RecipeContext.jsx';


export default function Search() {

  const [dish, setDish] = useState('');
  const [cousine, setCousine] = useState('');
  const [diet, setDiet] = useState('');
  const [intolarance, setIntolarance] = useState('');
  const [recipes, setRecipes] = useState([]);

  const { recipesContext, updateRecipes } = useContext(RecipeContext);

  const handleSubmit = (event) => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b6d38a42317e4300b862164b8fc3baae&query=${dish}&cuisine=${cousine}&diet=${diet}&intolerances=${intolarance}`).then((res) => {
      console.log(res)
      setRecipes(res.data.results);
    });
  };

  const handleSubmitRecipe = (newRecipeAdded) => {
    updateRecipes({ ...newRecipeAdded });
  };



  return (
    <div className="column-middle">
      <div>
        <h2>Search</h2>
        <input placeholder='What dish are you looking for?' value={dish} onChange={(e) => setDish(e.target.value)} />
      </div>
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
          <div>
            {recipes.map((recipe) => 
              <div key={recipe.id}>
              <img src={recipe.image} width="50" height="60"></img>
              <p>{recipe.title}</p>
              <button onClick={() => handleSubmitRecipe(recipe)}>Add</button>
              <button>More</button>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}


//quando o ususario clicar em Add, fazer um novo request com o ID da receita e adicionar esse retorno ao firebase