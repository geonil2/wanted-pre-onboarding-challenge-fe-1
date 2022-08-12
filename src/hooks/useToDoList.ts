import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {ToDoData, ToDoService} from "../services/toDoService";
import {FormType} from "../components/toDoDetail";

const UseToDoList = ({ initialState } : { initialState : ToDoData }) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.toDoListSlice);
  const [formType, setFormType] = useState<FormType>('addToDoListForm');
  // const [isDisabled, setIsDisabled] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedToDoListId, setSelectedToDoListId] = useState('');

  const [inputtedToDoList, setInputtedToDoList] = useState<ToDoData>(initialState);
  // const [selectedToDoList, setSelectedToDoList] = useState<ToDoData>(initialState)

  const handleClickShowModal = (formType: FormType) => {
    setFormType(formType);
    setIsShowModal(true);
  }

  const handleClickHideModal = () => {
    setInputtedToDoList(initialState);
    setIsShowModal(false);
  }

  const handleClickSelectToDoList = (id: string) => {
    setSelectedToDoListId(id);
    dispatch(ToDoService.getToById(id))
  }

  const setSelectedData = () => {
    const { title, content } = data;
    setInputtedToDoList({ title, content })
  }


  const handleNewToDoList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id, value } = e.target;
    // if (name === 'newToDoList') setNewToDoList({ ...newToDoList, [id]: value });
    // if (name === 'selectedToDoList') setSelectedToDoList({ ...newToDoList, [id]: value });
    setInputtedToDoList(prev => ({ ...prev, [id]: value }));
  }

  const submitToDoForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(e.currentTarget.innerText)
    console.log({ ...inputtedToDoList, id: data.id })
    // setNewToDoList({ title: '', content: '' });
    if (e.currentTarget.innerText === 'create') dispatch(ToDoService.createToDo(inputtedToDoList));
    if (e.currentTarget.innerText === 'delete') dispatch(ToDoService.deleteToDo(data.id));
    if (e.currentTarget.innerText === 'update') dispatch(ToDoService.updateToDo({ ...inputtedToDoList, id: data.id }));

    handleClickHideModal();
  }

  const handleClickResetButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedData();
  }

  const handleClickUpdateButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // setIsDisabled(false)
  }

  // useEffect(() => {
  //   if (formType === 'addToDoListForm') setIsDisabled(false);
  // }, [formType])

  useEffect(() => {
    if (formType === 'selectedToDoListForm') setSelectedData();
  }, [data])

  return {
    formType,
    isShowModal,
    handleClickShowModal,
    handleClickHideModal,
    selectedToDoListId,
    handleClickSelectToDoList,
    inputtedToDoList,
    handleNewToDoList,
    submitToDoForm,
    // isDisabled,
    handleClickUpdateButton,
    handleClickResetButton
  };
};

export default UseToDoList;
