import React, { useState } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserPage from './components/UserPage.jsx'

const App = () => {
  const [User, setUser] = useState([]);
  const [Toggler, setToggler] = useState(true);
  
  
  return (
    <div className='h-screen w-full flex'>

    <div className='h-screen w-2/3 bg-gray-950'>
      {Toggler ? 
      <Signup  setToggler={setToggler} User={User} setUser={setUser} /> 
      :
      <Signin setToggler={setToggler} User={User}/>}

      </div>
      <UserPage User={User} setUser={setUser} />
      </div>
  );
}

export default App;
