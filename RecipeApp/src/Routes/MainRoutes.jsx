import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from '../Pages/Home';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/recipe" element={<Recipe />} />
                <Route path="/recipe/create-recipe" element={<Recipe />} />
                <Route path="/recipe/update-recipe" element={<Recipe />} />
                <Route path="/recipe/details/:id" element={<Details />} />
            </Routes>
            
        </div>
    );
}

export default MainRoutes;
