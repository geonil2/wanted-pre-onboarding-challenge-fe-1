import React, {useEffect, useState} from 'react';
import {ToDoData, ToDoService} from "../services/toDoService";
import {useAppDispatch, useAppSelector} from "../redux/store";
import TimeAgo from "react-timeago";

const ToDoDetail = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.toDoListSlice);
  const [newList, setNewList] = useState<ToDoData>({ title: '', content: '' })
  const [selectedList, setSelectedList] = useState<ToDoData>({ title: '', content: '' })
  const [inputDisabled, setInputDisabled] = useState(true);

  const onClickSaveBtn = () => {
    setNewList({ title: '', content: '' });
    dispatch(ToDoService.createToDo(newList))
  }

  const setSelectedData = () => {
    const { title, content } = data
    setSelectedList({ title, content })
  }

  const clickResetBtn = () => {
    setInputDisabled(true);
    setSelectedData();
  }

  useEffect(() => {
    setSelectedData();
  }, [data])

  return (
    <div className="w-[calc(100%-25%-40px)] h-full flex flex-col justify-start bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
      <div>
        <p className="text-2xl text-[#195dae] font-bold text-center">Add List</p>
        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={newList.title}
            onChange={(e) => setNewList({ ...newList, title: e.target.value })}
            className="w-[300px] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Content</label>
          <input
            type="text"
            value={newList.content}
            onChange={(e) => setNewList({ ...newList, content: e.target.value })}
            className="w-[100%] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
          />
        </div>
        <button
          onClick={() => onClickSaveBtn()}
          className="w-full pointer-events-auto rounded-md text-center font-medium shadow-sm ring-1 ring-slate-700/10 py-2 px-4 mt-4 hover:bg-slate-50"
        >Save</button>
      </div>

      <div className='mt-10'>
        {data.id ?
          <>
            <p className="text-2xl text-[#195dae] font-bold text-center">Detail</p>
            <div className="flex flex-col">
              <div className="flex flex-col text-slate-700">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  disabled={inputDisabled}
                  value={selectedList.title}
                  onChange={(e) => setSelectedList({ ...selectedList, title: e.target.value })}
                  className="w-[300px] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-slate-700 mt-2">
                <label htmlFor="">Content</label>
                <input
                  type="text"
                  disabled={inputDisabled}
                  value={selectedList.content}
                  onChange={(e) => setSelectedList({ ...selectedList, content: e.target.value })}
                  className="w-[100%] text-sm bg-transparent ring-1 ring-slate-700/10 p-1 mt-1 focus:outline-none"
                />
              </div>
              <div className="text-xs font-medium text-slate-900 mt-2"><TimeAgo date={data.updatedAt}/></div>
              <div className="mt-2">
                <button onClick={() => setInputDisabled(false)} className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 hover:fill-[#195dae]">
                    <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
                  </svg>
                </button>
                <button onClick={() => clickResetBtn()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 hover:fill-[#195dae]">
                    <path d="M8.31 189.9l176-151.1c15.41-13.3 39.69-2.509 39.69 18.16v80.05C384.6 137.9 512 170.1 512 322.3c0 61.44-39.59 122.3-83.34 154.1c-13.66 9.938-33.09-2.531-28.06-18.62c45.34-145-21.5-183.5-176.6-185.8v87.92c0 20.7-24.31 31.45-39.69 18.16l-176-151.1C-2.753 216.6-2.784 199.4 8.31 189.9z"/></svg>
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => dispatch(ToDoService.deleteToDo(data.id))}
                  className="w-[49%] pointer-events-auto rounded-md text-center font-medium shadow-sm ring-1 ring-slate-700/10 py-2 px-4 mt-4 hover:bg-slate-50"
                >Remove
                </button>
                <button
                  onClick={() => dispatch(ToDoService.updateToDo({ ...selectedList, id: data.id }))}
                  className="w-[49%] pointer-events-auto rounded-md text-center font-medium shadow-sm ring-1 ring-slate-700/10 py-2 px-4 mt-4 hover:bg-slate-50"
                >Update
                </button>
              </div>
            </div>
          </>: null}
      </div>
    </div>
  );
};

export default ToDoDetail;
