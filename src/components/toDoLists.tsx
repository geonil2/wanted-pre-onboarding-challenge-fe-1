import React from 'react';
import {ToDoList} from "../redux/slices/toDoListsSlice";
import ToDoModal from "./toDoModal";
import useToDoList from "../hooks/useToDoList";
import List from "./list";

export type FormType = 'addToDoListForm' | 'selectedToDoListForm' | 'deleteToDoListForm';

const ToDoLists = () => {
  const {
    todoLists,
    formType,
    isShowModal,
    handleClickShowModal,
    handleClickHideModal,
    selectedToDoListId,
    handleClickSelectToDoList,
    inputtedToDoList,
    handleNewToDoList,
    submitToDoForm,
    handleClickResetButton
  } = useToDoList({
    initialState: { title: '', content: '' }
  });

  return (
    <>
      <div className="relative w-[35%] h-full bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
        <ul>
          {todoLists.map((toDoList: ToDoList) => (
            <List
              key={toDoList.id}
              toDoList={toDoList}
              selectedToDoListId={selectedToDoListId}
              handleClickSelectToDoList={handleClickSelectToDoList}
              handleClickShowModal={handleClickShowModal}
            />
          ))}
        </ul>
        <button
          onClick={() => handleClickShowModal("addToDoListForm")}
          className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 w-[50px] h-[50px] flex justify-center items-center bg-[#195dae] rounded-[50%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#FFFFFF"
            viewBox="0 0 448 512"
          >
           <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
          </svg>
        </button>
      </div>
      {isShowModal ?
        <ToDoModal
          formType={formType}
          handleClickShowModal={handleClickShowModal}
          handleClickHideModal={handleClickHideModal}
          inputtedToDoList={inputtedToDoList}
          submitToDoForm={submitToDoForm}
          handleNewToDoList={handleNewToDoList}
          handleClickResetButton={handleClickResetButton}
      /> : null}
    </>
  );
};

export default ToDoLists;
