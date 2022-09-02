import React, { useEffect } from 'react';
import StyledMyRecipes from './StyledMyRecipes';
// import Search from '../Search/Search';

const MyRecipes = ({ myRecipes, handleToDelete }) => {

    // useEffect(() => {
    //     console.log(localStorage.getItem("myRescipes"));
    // }, [localStorage.getItem("myRescipes")])


  return (
    <StyledMyRecipes >
        <h2>My Recipes</h2>
        {
            myRecipes.length != 0 
            ?
            myRecipes.map((item, index) => {
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

export default MyRecipes;
