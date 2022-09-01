import React, { useContext } from 'react';
import Accordion from './AccordionMenu.jsx';

export default function RecipesShoppingList() {

    //Usar o conteudo salvo no firebase

    const accordionData = [
        {
          title: 'Section 1',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        }]

    return (
        <div>
            <h1>My Shopping List - Recipes</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    )
}