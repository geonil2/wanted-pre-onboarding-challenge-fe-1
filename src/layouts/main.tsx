import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ToDo from "../pages/toDo";
import Home from "../pages/home";
import Auth from "../pages/auth";
import ErrorBanner from "../components/errorBanner";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <>
    <ToastContainer/>
    <main className="w-full h-screen flex flex-col justify-center items-center text-[#1b1b1b] bg-white pt-[40px]">
      {/*<ErrorBanner />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </main>
    </>
  );
};

export default Main;
