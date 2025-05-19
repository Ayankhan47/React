import React, { createContext, useState } from 'react';
export const UserContext = createContext(null)
const Wrapper = (props) => {
    const [User, setUser] = useState({name : "john doe", age : 20 , City : "Bhopal"});
    return (
        <UserContext.provider value={{User , setUser}}>
            {props.children}
        </UserContext.provider>
    );
}

export default Wrapper;
