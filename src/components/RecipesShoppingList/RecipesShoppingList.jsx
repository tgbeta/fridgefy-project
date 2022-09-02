import React, { useContext } from 'react';
import Accordion from './AccordionMenu.jsx';
import { RecipeContext } from '../RecipeContext.jsx';

export default function RecipesShoppingList() {

    const { getRecipes } = useContext(RecipeContext);

    //Usar o conteudo salvo no firebase

    // const accordionData = [
    //     {
    //       title: 'Section 1',
    //       content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    //       laborum cupiditate possimus labore, hic temporibus velit dicta earum
    //       suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    //       voluptatem.`
    //     }]

    const recipes = getRecipes();


    return (
        <div>
            <h1>My Shopping List - Recipes</h1>
            {/* <div className="accordion">
                {recipes.map(({ image, ingredients, title }) => (
                    // <Accordion title={title} content={content} />
                    <Accordion image={image} ingredients={ingredients} tittle={title}/>
                ))}
            </div> */}
        </div>
    )
}