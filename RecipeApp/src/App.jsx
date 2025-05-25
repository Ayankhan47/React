import React from 'react';
import { useContext } from 'react';
import { RecipeContextProvider } from './Context/RecipeContext';

const App = () => {
  const { recipes, setRecipes } = useContext(RecipeContextProvider);
  return (
    <div>
      
    </div>
  );
}

export default App;
