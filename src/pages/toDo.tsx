import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ToDoLists from "../components/toDoLists";
import {autoLogIn} from "../redux/slices/signInSlice";

const ToDo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogIn());
  }, [])

  return (
    <section className="w-full h-[calc(100%-40px)] flex justify-center items-start p-[40px]">
      <ToDoLists />
    </section>
  );
};

export default ToDo;
