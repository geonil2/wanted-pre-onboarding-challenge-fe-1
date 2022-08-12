import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import ToDoLists from "../components/toDoLists";
import ToDoDetail from "../components/toDoDetail";
import {ToDoService} from "../services/toDoService";
import {useAppDispatch} from "../redux/store";
import ToDoModal from "../components/toDoModal";

const ToDo = () => {
  return (
    <section className="w-full h-[calc(100%-40px)] flex justify-center items-start p-[40px]">
      <ToDoLists />
      {/*<ToDoDetail />*/}
    </section>
  );
};

export default ToDo;
