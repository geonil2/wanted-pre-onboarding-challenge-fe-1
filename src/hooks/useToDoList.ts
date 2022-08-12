import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {ToDoData, ToDoService} from "../services/toDoService";
import {FormType} from "../components/toDoLists";


const UseToDoList = ({ initialState } : { initialState : ToDoData }) => {
  const dispatch = useAppDispatch();
  const toDoListSlice = useAppSelector(state => state.toDoListSlice);
  const toDoListsSlice = useAppSelector(state => state.toDoListsSlice);
  const [formType, setFormType] = useState<FormType>('addToDoListForm');
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedToDoListId, setSelectedToDoListId] = useState('');
  const [inputtedToDoList, setInputtedToDoList] = useState<ToDoData>(initialState);

  const handleClickShowModal = (formType: FormType) => {
    setFormType(formType);
    setIsShowModal(true);
  }

  const handleClickHideModal = () => {
    console.log(initialState, '!@!')
    setInputtedToDoList(initialState);
    setIsShowModal(false);
  }

  const handleClickSelectToDoList = (id: string) => {
    setSelectedToDoListId(id);
    dispatch(ToDoService.getToById(id))
  }

  const setSelectedData = () => {
    const { title, content } = toDoListSlice.data;
    setInputtedToDoList({ title, content })
  }


  const handleNewToDoList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputtedToDoList(prev => ({ ...prev, [id]: value }));
  }

  const submitToDoForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(e.currentTarget.innerText)
    switch (e.currentTarget.innerText) {
      case 'Save':
        dispatch(ToDoService.createToDo(inputtedToDoList));
        break;
      case 'Update' :
        dispatch(ToDoService.updateToDo({ ...inputtedToDoList, id: toDoListSlice.data.id }));
        break;
      case 'Delete' :
        dispatch(ToDoService.deleteToDo(toDoListSlice.data.id));
        break;
    }

    handleClickHideModal();
  }

  const handleClickResetButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedData();
  }

  useEffect(() => {
    dispatch(ToDoService.getToDos());
  }, [])

  useEffect(() => {
    if (formType === 'selectedToDoListForm') setSelectedData();
  }, [toDoListSlice.data])

  return {
    todoLists : toDoListsSlice.data,
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
  };
};

export default UseToDoList;
