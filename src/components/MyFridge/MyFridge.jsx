import React, { Component, useEffect, useState } from "react";
import IngredientsList from "./IngredientsList";
import StyledMyFridge from "./StyledMyFridge";
import axios from 'axios';

export default function UserIngredients() {

  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([]);

  const getIngredients = () => {
    axios.get(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_SPOONACULAR}&query=${ingredient}`).then((res) => {

      const filterIngredient = res.filter(resIngedient => resIngedient.data.results.name == ingredient);

      setListIngredients(filterIngredient);
      console.log(listIngredients)
    });
    
  };

    return (
    <StyledMyFridge>
      <h2>My Fridge</h2>
      <div>
        <input type={'text'}
        placeholder="Search Ingredient"
        onChange={(e) => setIngredient(e.target.value)} />
        <div>
          <button onClick={getIngredients}>Add</button>
        </div>
      </div>
      <div>
        {ingredient && <IngredientsList IngredientsData={ingredient} />}
      </div>
    </StyledMyFridge>
  );
}