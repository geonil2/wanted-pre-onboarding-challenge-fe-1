import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";
import {signOut} from "../redux/slices/signInSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useAppSelector(state => state.authSlice);

  return (
    <header className="fixed w-full h-[40px] flex justify-center items-center">
      <div className="container flex justify-between items-center px-5">
        <Link to="/">
          <span className="text-xl text-[#195dae] font-bold">To Do List</span>
        </Link>
        <nav>
          <ul className="flex justify-center items-center">
            {data.token ?
              <>
                <li className="text-base border-0 rounded cursor-pointer py-1 px-3 mr-5">
                  <Link to='/todo'>To Do</Link>
                </li>
                <li
                  className="bg-gray-100 text-base border-0 rounded cursor-pointer py-1 px-3 hover:bg-gray-200"
                  onClick={() => dispatch(signOut())}
                ><Link to='/'>Log Out</Link></li>
              </>
              :
              <li className="bg-gray-100 text-base border-0 rounded cursor-pointer py-1 px-3 hover:bg-gray-200"
              ><Link to='/auth'>Log In</Link></li>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
