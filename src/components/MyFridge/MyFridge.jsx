import React, { Component, useEffect, useState } from "react";
import IngredientsList from "./IngredientsList";
import StyledMyFridge from "./StyledMyFridge";
import axios from 'axios';

export default function UserIngredients() {

  function handleChange(e) {
    setIngredients(e.target.value)
  }

  const [ingredients, setIngredients] = useState("");
  
  function getIngredients() {
    fetch('https://api.spoonacular.com/food/ingredients/search?apiKey=b6d38a42317e4300b862164b8fc3baae&query')
    .then((response) => response.json())
    .then((data) => {
      setIngredients(data);
      console.log(data);
    })
    .catch(() => {
      console.log('error')
    })
  }

    return (
    <StyledMyFridge>
      <h2>My Fridge</h2>
      <div>
        <input type={'text'}
        placeholder="Search Ingredient"
        onChange={handleChange} />
        <div>
          <button onClick={getIngredients}>Search</button>
          <button>Add</button>
        </div>
      </div>
      <div>
        {ingredients && <IngredientsList IngredientsData={ingredients} />}
      </div>
    </StyledMyFridge>
  );
}
