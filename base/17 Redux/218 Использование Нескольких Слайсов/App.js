import React from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Auth/>
      <Counter/>
    </React.Fragment>
  );
}

export default App;