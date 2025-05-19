import React from "react";
import { useForm } from "react-hook-form";
import {nanoid} from "nanoid"
import { useContext } from "react";
import {UserContext} from "../contexts/DataContext";
const Signup = () => {
    const { User, setUser, setToggler } = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    setUser([...User, data]);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full h-full mx-auto  p-20"
    >
      <h1 className="text-6xl font-semibold text-white mb-30">
        Let's start your journey
      </h1>
      <input
        {...register("name", { required: true })}
        placeholder="John Doe"
        className="block font-light text-white placeholder:text-gray-200 w-full p-2  border-b mb-16 text-2xl outline-0"
        type="text"
      />
      <input
        {...register("email", { required: true })}
        placeholder="Johndoe@gmail.com"
        className="block font-light  text-white placeholder:text-gray-200 w-full p-2  border-b mb-16 text-2xl outline-0"
        type="text"
      />
      <input
        {...register("password", { required: true })}
        placeholder="********"
        className="block font-light  text-white placeholder:text-gray-200 w-full p-2 border-b mb-10 text-2xl outline-0"
        type="password"
      />
      <input
      value="Signup"
        className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-3xl font-semibold"
        type="submit"
      />
      <h1 className="text-white text-2xl mt-10">
        Already have an account?{" "}
        <span
          onClick={() => {
            setToggler(false);
          }}
          className="text-emerald-500 cursor-pointer"
        >
          Sign in
        </span>
      </h1>
    </form>
  );
};

export default Signup;
