import React from 'react';
import { useForm } from 'react-hook-form';
import {ToastContainer,toast} from 'react-toastify';

const Signin = ({setToggler, User}) => {
    const {register, handleSubmit} = useForm();
    const SubmitHandler = (data)=>{
      const isUser = User.find((user)=>{
        return user.email === data.email && user.password === data.password
      })
      if(isUser){
        console.log(isUser);
        toast.success("Login Successful");
        
      }
        else{
          console.log(isUser,"User Not Found");
          toast.error("User Not Found");
        } 
    }
    return (
        <>
        <form onSubmit={handleSubmit(SubmitHandler)}  className="w-full h-full mx-auto  p-20">
      <h1 className="text-6xl font-semibold text-white mb-30">
        Get back to the same
      </h1>
      <input
      {...register("email")}
        type="text"
        placeholder="Johndoe@gmail.com"
        className="block font-light  text-white placeholder:text-gray-200 w-full p-2  border-b mb-16 text-2xl outline-0"
      />
      <input
      {...register("password")}
        type="password"
        placeholder="********"
        className="block font-light text-white placeholder:text-gray-200 w-full p-2  border-b mb-16 text-2xl outline-0"
      />
      <input value="Signin" className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-3xl font-semibold" type="submit" />
      <h1 className="text-white text-2xl mt-10">
        Already have an account?{" "}
        <span
          onClick={() => {
            setToggler(true);
            
          }}
          className="text-emerald-500 cursor-pointer"
        >
        Sign in
        </span>
        </h1>
        <ToastContainer />
    </form>
        </>
    );
}

export default Signin;
