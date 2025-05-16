import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("male");
  const [accept, setaccept] = useState(false);
  const [city, setcity] = useState("city");
  const [data, setdata] = useState([]);
  console.log(data);
  
const obj = {
  name:name,
  password:password,
  date:date,
  gender:gender,
  accept:accept,
  city:city
}
  const handleChange = (e) => {
    e.preventDefault();
    setdata([...data,obj])
    
    setname("")
    setpassword("")
    setDate("")
  };


  return (
    <>
      <div className="h-screen w-screen bg-red-100 flex flex-col justify-center items-cente">
        <form
          className="py-[20vh] px-[10vw] bg-white flex flex-wrap items-center justify-center gap-10  "
          onSubmit={handleChange}
        >
          <label>Name:</label>
          <input
          value={name}
          onChange={(e)=>{
            setname(e.target.value)
          }
          }
            className="h-10 w-50 border-2 border-red-200 rounded-3xl px-3 "
            type="text"
            id="name"
          />
          <label>Password:</label>
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }
          }
            className="h-10 w-50 border-2 border-red-200 rounded-3xl px-3"
            type="password"
            id="password"
          />
          <label>Date:</label>
          <input
          value={date}
          onChange={(e)=>{
            setDate(e.target.value)
          }
          }
            className="h-10 w-50border-2 border-red-200 rounded-3xl px-3"
            type="date"
            id="date"
          />
          <label htmlFor="">
            <input
              onChange={(e) => {
                e.target.checked && setgender("male");
              }}
              checked={gender === "male" && true}
              type="radio"
            />
            Male
          </label>
          <label htmlFor="">
            <input
              onChange={(e) => {
                e.target.checked && setgender("female");
              }}
              checked={gender === "female" && true}
              type="radio"
            />
            female
          </label>
          <label htmlFor="">
            <input
            onChange={()=>{
              setaccept(!accept)
            }}
            checked = {accept === true? true: false }
             type="checkbox" />
            Terms & conditions 
          </label>
          <input className="px-3 py-2 bg-cyan-400 rounded-3xl" type="submit" />
          <label htmlFor="">
            <select
            value={city}
            onChange={(e)=>{
              setcity(e.target.value)
            }}
             name="" id="">
              <option disabled value="city">city</option>
              <option value="bhopal">bhopal</option>
              <option value="indore">indore</option>
              <option value="gwalior">gwalior</option>
            </select>
          </label>
        </form>
      </div>
    </>
  );
};

export default App;
