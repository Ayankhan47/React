import React, { useState } from 'react';
import { createContext } from 'react';
export const UserContext = createContext(null);
const DataContext = (props) => {
      const [User, setUser] = useState([]);
      const [Toggler, setToggler] = useState(true);
    return (
        <UserContext.Provider value={{User, setUser, Toggler, setToggler}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default DataContext;
