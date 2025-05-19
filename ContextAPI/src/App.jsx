import React, { useState } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import User from './components/User.jsx'
import { useContext } from 'react';
import {UserContext} from './contexts/DataContext';

const App = () => {
    const { Toggler } = useContext(UserContext);
  return (
    <div className='h-screen w-full flex'>

    <div className='h-screen w-2/3 bg-gray-950'>
      {Toggler ? 
      <Signup /> 
      :
      <Signin />}

      </div>
      <User />
      </div>
  );
}

export default App;
