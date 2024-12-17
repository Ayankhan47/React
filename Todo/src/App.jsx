import React from "react";
import { useState } from "react";

const App = () => {
  const [value, setvalue] = useState("");
  const [tasks, settasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    
    const newArr = [...tasks,value];
    
    settasks(newArr)
    console.log(newArr);
    
    setvalue("");
    };
  return (
    <div className="h-screen bg-yellow-50 flex flex-col items-center justify-around" id="main">
      <h1 className="font-[monument] text-3xl text-center">TODO LIST</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" h-[5vw] w-screen flex items-center justify-center gap-[4vw]">
        <input
          onChange={(elem) => {
            setvalue(elem.target.value);
          }}
          className="shadow-sm hover:shadow-lg transition-all h-[3vw] w-[30vw] rounded-lg border border-gray-100 outline-none"
          type="text"
          placeholder="Enter items"
          value={value}
        />
        <input className="py-3 px-5 rounded-xl bg-yellow-400" type="submit" value="Submit" />
      </form>
      <div className="bg-yellow-400 rounded-lg p-5 h-[30vw] w-[70vw] flex items-start justify-start" id="list">
        {tasks.map(function(elem){
          return <h1 className="mr-7">
            {elem}
          </h1>
        
        })}
      </div>
    </div>
  );
};

export default App;
