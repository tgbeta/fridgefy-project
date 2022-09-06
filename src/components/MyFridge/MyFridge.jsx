import React, { Component, useContext, useEffect, useState } from "react";
import IngredientsList from "./IngredientsList";
import StyledMyFridge from "./StyledMyFridge";
import axios from 'axios';
import { IngredientContext } from "../IngredientContext";


export default function UserIngredients() {

  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([]);

//  const  { ingredientsContext, setIngredients} = useContext(IngredientContext);

  const getIngredients = () => {
    axios.get(`https://api.spoonacular.com/food/ingredients/search?apiKey=b6d38a42317e4300b862164b8fc3baae&query=${ingredient}`).then((res) => {
    setListIngredients(res.data.results);
    });
  };

  // chamar o contexto do ingrediente e chamar dentro da funcao
  const handleSubmitAddIngredient = (e) => {
    e.preventDefault();
    
  }


    return (
      <StyledMyFridge>
        <h2>My Fridge</h2>
        <div>
          <input type={'text'}
          placeholder="Search Ingredient"
          onChange={(e) => setIngredient(e.target.value)} />
          <ul>
            {
              listIngredients.map(ingredient => <li value="" onClick={handleSubmitAddIngredient}>{ingredient.name}</li>)
            }
          </ul>
          <div>
            <button onClick={getIngredients}>Search</button>
          </div>
        </div>
          <div>
            {ingredient && <IngredientsList IngredientsData={ingredient} />}
          </div>
    </StyledMyFridge>
  );
}