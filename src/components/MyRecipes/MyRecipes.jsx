import React, { Component } from 'react';
import StyledMyRecipes from './StyledMyRecipes';
import Search from '../Search/Search';

class MyRecipes extends Component {
    render() {
        return (
            <StyledMyRecipes>
            <h2>My Recipes</h2>
            <div>
              <p>Recipe</p>
              <button>X</button>
            </div>
            </StyledMyRecipes>
        );
    }
}

export default MyRecipes;