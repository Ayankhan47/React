import React, { useState } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import User from './components/User';

const App = () => {
  const [data, setdata] = useState("data is drilled through all three items");
  
  return (
    <div>
      <Login data={data} setdata={setdata}/>
      <Signup data={data} setdata={setdata}/>
      <User  data={data} setdata={setdata}/>
    </div>
  );
}

export default App;
