import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/articles'>
          <Articles/>
        </Route>
        <Route path='/ArticleDetails/:articleId'>
          <ArticleDetails/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
