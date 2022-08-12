import React from 'react';
import {ToDoData} from "../services/toDoService";

const NewToDoListForm = (
  {
    newToDoList,
    handleNewToDoList,
    submitNewToDoList
  } : {
    newToDoList: ToDoData,
    handleNewToDoList: (e: React.ChangeEvent<HTMLInputElement>) => void,
    submitNewToDoList: () => void
  }) => {
  return (
    <form onSubmit={submitNewToDoList}>
      <p className="text-2xl text-[#195dae] font-bold text-center">Add List</p>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="newToDoList"
          type="text"
          value={newToDoList.title}
          onChange={handleNewToDoList}
          className="w-[300px] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="content">Content</label>
        <input
          id="content"
          name="newToDoList"
          type="text"
          value={newToDoList.content}
          onChange={handleNewToDoList}
          className="w-[100%] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        // onClick={() => handleSaveBtn()}
        className="w-full pointer-events-auto rounded-md text-center font-medium shadow-sm ring-1 ring-slate-700/10 py-2 px-4 mt-4 hover:bg-slate-50"
      >Save</button>
    </form>
  );
};

export default NewToDoListForm;
