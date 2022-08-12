import React, {useEffect, useState} from 'react';
import {ToDoData, ToDoService} from "../services/toDoService";
import {useAppDispatch, useAppSelector} from "../redux/store";
import TimeAgo from "react-timeago";
import useToDoList from "../hooks/useToDoList";
import SelectedToDoListForm from "./selectedToDoListForm";
import NewToDoListForm from "./newToDoListForm";
import ToDoForm from "./toDoForm";

export type FormType = 'addToDoListForm' | 'selectedToDoListForm';


const ToDoDetail = () => {
  const newToDoList = useToDoList({
    // formType: 'addToDoListForm',
    initialState: { title: '', content: '' }
  });
  const selectedToDoList = useToDoList({
    // formType: 'selectedToDoListForm',
    initialState: { title: '', content: '' }

  });
  // { inputToDoList, handleNewToDoList, submitToDoForm, isDisabled, handleClickUpdateButton, handleClickResetButton }
  return (
    <div className="w-[calc(100%-25%-40px)] h-full flex flex-col justify-start bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
      {/*<NewToDoListForm*/}
      {/*  newToDoList={newToDoList}*/}
      {/*  handleNewToDoList={handleNewToDoList}*/}
      {/*  submitNewToDoList={submitNewToDoList}*/}
      {/*/>*/}
      {/*<SelectedToDoListForm*/}
      {/*  selectedToDoList={selectedToDoLi st}*/}
      {/*  handleNewToDoList={handleNewToDoList}*/}
      {/*  isDisabled={isDisabled}*/}
      {/*  handleClickUpdateButton={handleClickUpdateButton}*/}
      {/*  handleClickResetButton={handleClickResetButton}*/}
      {/*/>*/}
      <ul className="flex justify-center items-center">
        <li className="bg-[#195dae30] text-[#195dae] font-bold border-0 rounded cursor-pointer py-1 px-3 mr-4 hover:bg-[#195dae70]">Add List</li>
        <li className="bg-[#195dae30] text-[#195dae] font-bold border-0 rounded cursor-pointer py-1 px-3 mr-4 hover:bg-[#195dae70]">Update List</li>
      </ul>
      {/*<ToDoForm*/}
      {/*  formType='addToDoListForm'*/}
      {/*  toDoList={newToDoList.inputToDoList}*/}
      {/*  handleNewToDoList={newToDoList.handleNewToDoList}*/}
      {/*  isDisabled={false}*/}
      {/*  submitToDoForm={newToDoList.submitToDoForm}*/}
      {/*/>*/}
      {/*<ToDoForm*/}
      {/*  formType='selectedToDoListForm'*/}
      {/*  toDoList={selectedToDoList.inputToDoList}*/}
      {/*  handleNewToDoList={selectedToDoList.handleNewToDoList}*/}
      {/*  isDisabled={selectedToDoList.isDisabled}*/}
      {/*  handleClickUpdateButton={selectedToDoList.handleClickUpdateButton}*/}
      {/*  handleClickResetButton={selectedToDoList.handleClickResetButton}*/}
      {/*  submitToDoForm={selectedToDoList.submitToDoForm}*/}
      {/*/>*/}
    </div>
  );
};

export default ToDoDetail;
