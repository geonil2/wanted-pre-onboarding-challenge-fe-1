import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {ToDoService} from "../services/toDoService";
import {ToDoList} from "../redux/slices/toDoListsSlice";
import TimeAgo from 'react-timeago'

const ToDoLists = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.toDoListsSlice);

  useEffect(() => {
    console.log(data, '123123');
  }, [data])

  useEffect(() => {
    dispatch(ToDoService.getToDos())
  }, [])

  return (
    <div className="w-[25%] h-full bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
      <ul>
        {data.map((toDoList: ToDoList) => (
          <li
            onClick={() => dispatch(ToDoService.getToById(toDoList.id))}
            className="pointer-events-auto w-full flex justify-between rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 mb-2 cursor-pointer hover:bg-slate-50 ring-2 ring-indigo-600"
          >
            <div>{toDoList.title}</div>
            <div><TimeAgo date={toDoList.updatedAt}/></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoLists;
