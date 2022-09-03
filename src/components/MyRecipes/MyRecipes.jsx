import React, { useEffect, useContext } from 'react';
import StyledMyRecipes from './StyledMyRecipes';
import { RecipeContext } from '../RecipeContext.jsx';

//const MyRecipes = ({ myRecipes, handleToDelete }) => {
export default function MyRecipes() {

    const { recipes, removeRecipe } = useContext(RecipeContext);
    
    const handleToDelete = (RecipeDeletedId) => {
        removeRecipe(RecipeDeletedId);
        console.log("recipe deleted")   
      };

  return (
    <StyledMyRecipes >
        <h2>My Recipes</h2>
        {
           recipes.length != 0 
            ?
            recipes.map((item) => {
                return (
                    <>
                        <p>{item.title}</p>
                        <button onClick={() => handleToDelete(item.id)}>X</button>
                    </>
                )
            })
            : 
            <div>There is no item in list!</div>
        }
    </StyledMyRecipes>
  )
}

//export default MyRecipes;
