import React, { useContext } from 'react';
import Accordion from './AccordionMenu.jsx';
import { RecipeContext } from '../RecipeContext.jsx';

export default function RecipesShoppingList() {

    const { recipes } = useContext(RecipeContext);

    return (
        <div>
            <h1>My Shopping List - Recipes</h1>
            <div className="accordion">
                {recipes.map(({ image, ingredients, title }) => (
                    <Accordion image={image} ingredients={ingredients} title={title}/>
                ))}
            </div>
        </div>
    )
}