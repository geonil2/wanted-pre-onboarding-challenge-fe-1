import React from 'react';
import ToDoForm from "./toDoForm";
import useToDoList from "../hooks/useToDoList";
import {FormType} from "./toDoDetail";
import {ToDoData} from "../services/toDoService";

const ToDoModal = ({
 formType,
 handleClickShowModal,
 handleClickHideModal,
 inputtedToDoList,
 // isDisabled,
 submitToDoForm,
 handleNewToDoList,
 handleClickResetButton
} : {
  formType: FormType,
  handleClickShowModal: (formType: FormType) => void,
  handleClickHideModal: () => void,
  inputtedToDoList: ToDoData,
  // isDisabled: boolean,
  submitToDoForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleNewToDoList: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClickResetButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000030]">
      <div className="relative w-[35%] h-auto bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
        <button
          onClick={handleClickHideModal}
          className="absolute top-2 right-2"
        >
          {/* x button */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  className="w-4 fill-[#195dae]">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
          </svg>
        </button>
        <ToDoForm
          formType={formType}
          toDoList={inputtedToDoList}
          // handleNewToDoList={newToDoList.handleNewToDoList}
          // isDisabled={isDisabled}
          submitToDoForm={submitToDoForm}
          handleNewToDoList={handleNewToDoList}
          handleClickResetButton={handleClickResetButton}
        />
      </div>
    </div>
  );
};

export default ToDoModal;
