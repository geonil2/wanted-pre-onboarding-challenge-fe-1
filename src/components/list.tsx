import React, {useState} from 'react';
import TimeAgo from "react-timeago";
import {ToDoList} from "../redux/slices/toDoListsSlice";
import {FormType} from "./toDoDetail";

const List = ({
  toDoList,
  handleClickSelectToDoList,
  selectedToDoListId,
  handleClickShowModal
} : {
  toDoList: ToDoList,
  selectedToDoListId: string,
  handleClickSelectToDoList: (id: string) => void,
  handleClickShowModal: (formType: FormType) => void,
}) => {
  return (
    <li
      // onClick={() => dispatch(ToDoService.getToById(toDoList.id))}
      onClick={() => handleClickSelectToDoList(toDoList.id)}
      className={`${selectedToDoListId === toDoList.id ? 'ring-2': ''} pointer-events-auto w-full rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 mb-2 cursor-pointer hover:bg-slate-50 hover:ring-2 ring-[#195dae]`}
    >
      <div className="flex justify-between">
        <div className="font-bold">{toDoList.title}</div>
        <div><TimeAgo date={toDoList.updatedAt}/></div>
      </div>
      {selectedToDoListId === toDoList.id ?
        <div className="flex justify-between items-center">
          <p className="mt-2">{toDoList.content}</p>
          <div className="mt-2">
            <button
              onClick={() => handleClickShowModal('selectedToDoListForm')}
              className="mr-2"
            >
              {/* update button */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 fill-[#195dae70] hover:fill-[#195dae]">
                <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
              </svg>
            </button>
            <button
              // onClick={handleClickResetButton}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 fill-[#195dae70] hover:fill-[#195dae]">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/>
              </svg>
            </button>
          </div>
        </div> : null}
    </li>
  );
};

export default List;
