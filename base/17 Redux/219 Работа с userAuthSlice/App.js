import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import Counter from './components/Counter';
import {useSelector} from 'react-redux';

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <React.Fragment>
      <Header/>
      {!isUserLoggedIn && <Auth/>}
      {isUserLoggedIn && <UserProfile/>}
      <Counter/>
    </React.Fragment>
  );
}

export default App;