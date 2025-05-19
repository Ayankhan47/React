import React from "react";
import { useContext } from "react";
import {UserContext} from "../contexts/DataContext";

const User = () => {
    const { User , setUser } = useContext(UserContext);
  const deleteHandler = (id) => {
    const newUser = User.filter((user) => user.id !== id);
    setUser(newUser);
  };
  return (
    <div className="w-1/3 h-screen bg-black p-6 py-10 ">
      <h1 className="text-white text-5xl text-center mb-10">Registered Users</h1>
      <div className="cards flex flex-col gap-8 overflow-y-scroll h-[80vh] hideScrollbar">
        {User.map((User)=>{
          return(
            <div key={User.id} className="card rounded-md flex items-center justify-between bg-white">
          <div className="left w-[60%] p-6">
            <h1 className="font-semibold text-3xl">{User.name}</h1>
            <h3 className="text-gray-500 text-xl">
              {User.email}
            </h3>
          </div>
          <div className="right flex justify-center w-[30%]">
            <button onClick={()=>deleteHandler(User.id)} className="bg-red-500 active:scale-[0.95] text-white p-2 rounded-md">Delete</button>
          </div>
        </div>
          )
        })}
        </div>
      </div>
  );
};

export default User;
