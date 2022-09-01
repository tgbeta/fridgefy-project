import React, { Component, useEffect, useState, useContext } from "react";
import IngredientsList from "./IngredientsList";
import StyledMyFridge from "./StyledMyFridge";
import axios from 'axios';
//import { IngredientContext } from "../IngredientContext";

  const [ingredient, setIngredient] = useState("");
  const [listIngredients, setListIngredients] = useState([]);

  //const { ingredients, updateIngredients } = useContext(IngredientContext);

  const getIngredients = () => {
    axios.get(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_SPOONACULAR}&query=${ingredient}`).then((res) => {
      const filterIngredient = res.data.results.filter(resIngedient => resIngedient.name == ingredient); //else with message not find ingredient

      setListIngredients(filterIngredient);
      console.log(listIngredients)

      //updateIngredients({ ...filterIngredient});
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
        {listIngredients && <IngredientsList IngredientsData={listIngredients} />}
      </div>
    </StyledMyFridge>
  );
}