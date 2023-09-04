import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
