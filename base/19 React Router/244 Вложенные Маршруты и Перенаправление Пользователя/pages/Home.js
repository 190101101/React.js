import {Route} from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <h1>Home page</h1>
            <Route path='/home/new-user'>
                <h2>welcome</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </Route>
        </section>
    );
}

export default Home;