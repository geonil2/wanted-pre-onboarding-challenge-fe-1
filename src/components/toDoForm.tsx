import React from 'react';
import {FormType} from "./toDoLists";
import {ToDoData} from "../services/toDoService";

type toDoFormProps = {
  formType: FormType,
  toDoList: ToDoData,
  handleNewToDoList: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleClickResetButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  submitToDoForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ToDoForm = ({
  formType,
  toDoList,
  handleNewToDoList,
  handleClickResetButton,
  submitToDoForm
} : toDoFormProps) => {
  return (
    <form className='py-4'>
        <>
          <p className="text-2xl text-[#195dae] font-bold text-center">
            {formType === 'addToDoListForm' ? 'Add List' : formType === 'selectedToDoListForm' ? 'Detail List' : 'Delete List'}
          </p>
          <div className="flex flex-col">
            {formType === 'deleteToDoListForm' ?
              <p className="text-center my-4">Are you sure you want to delete?</p>
              :
              <>
                <div className="flex flex-col text-slate-700">
                  <label htmlFor="">Title</label>
                  <input
                    id="title"
                    type="text"
                    name="toDoList"
                    value={toDoList.title}
                    onChange={handleNewToDoList}
                    className="w-full text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col text-slate-700 mt-2">
                  <label htmlFor="">Content</label>
                  <input
                    id="content"
                    type="text"
                    name="toDoList"
                    value={toDoList.content}
                    onChange={handleNewToDoList}
                    className="w-full text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
                  />
                </div>
              </>
            }
            {formType === 'selectedToDoListForm' ?
              <div className="mt-2">
                <button type="button" onClick={handleClickResetButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 hover:fill-[#195dae]"
                  >
                    <path d="M8.31 189.9l176-151.1c15.41-13.3 39.69-2.509 39.69 18.16v80.05C384.6 137.9 512 170.1 512 322.3c0 61.44-39.59 122.3-83.34 154.1c-13.66 9.938-33.09-2.531-28.06-18.62c45.34-145-21.5-183.5-176.6-185.8v87.92c0 20.7-24.31 31.45-39.69 18.16l-176-151.1C-2.753 216.6-2.784 199.4 8.31 189.9z"/>
                  </svg>
                </button>
              </div> : null
            }
            <button
              type="button"
              onClick={submitToDoForm}
              className="w-full pointer-events-auto rounded-md text-center font-medium shadow-sm ring-1 ring-slate-700/10 py-2 px-4 mt-4 hover:bg-slate-50"
            >{formType === 'addToDoListForm' ? 'Save' : formType === 'selectedToDoListForm' ? 'Update' : 'Delete'}</button>
        </div>
      </>
    </form>
  );
};

export default ToDoForm;
