import React, {useEffect} from 'react';
import Header from "./layouts/header";
import Main from "./layouts/main";
import {useDispatch} from "react-redux";
import {autoLogIn} from "./redux/slices/signInSlice";
import ErrorBanner from "./components/errorBanner";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
