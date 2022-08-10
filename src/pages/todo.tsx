import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import ToDoLists from "../components/toDoLists";
import ToDoDetail from "../components/toDoDetail";
import {ToDoService} from "../services/toDoService";
import {useAppDispatch} from "../redux/store";

const Todo = () => {
  return (
    <section className="w-full h-[calc(100%-40px)] flex justify-between items-start p-[40px]">
      <ToDoLists />
      <ToDoDetail />
    </section>
  );
};

export default Todo;
