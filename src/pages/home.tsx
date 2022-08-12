import React, {useEffect} from 'react';
import AuthForm from "../components/authForm";

const Home = () => {
  useEffect(() => {
    console.log('home~~')
    }, [])

    return (
      <section className='w-full h-[calc(100%-40px)] flex justify-center items-center'>
        Home
      </section>
        );
};

export default Home;
