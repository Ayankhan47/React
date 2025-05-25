import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
const RecipeContextProvider = createContext(null);

const RecipeContext = () => {
    const [recipes, setRecipes] = useState([]);
    return (
        <RecipeContextProvider.Provider value={{ recipes, setRecipes }}>
            {props.children}
        </RecipeContextProvider.Provider>
    );
}

export default RecipeContext;
