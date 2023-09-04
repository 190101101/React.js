import {Fragment} from 'react';
import {useParams, Route, Link} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedJoke from '../components/jokes/HighlightedJoke';

const DUMMY_JOKES = [
    {
        id: 'p1',
        topic: 'programming',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    },
    {
        id: 'p2',
        topic: 'general',
        text: 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
];

const JokeDetails = () => {
    const params = useParams();

    const joke = DUMMY_JOKES.find(joke => joke.id === params.jokeId);

    if(!joke){
        return <h1 className="centered">шуток не найдено</h1>
    }

    return (
        <Fragment>
            <HighlightedJoke text={joke.text} topic={joke.topic}/>
            <Route path={`/jokes/${params.jokeId}`} exact>
                <div className='centered'>
                    <Link to={`/jokes/${params.jokeId}/comments`} className='btn--empty'>Show Comments</Link>
                </div>
            </Route>
            <Route path={`/jokes/${params.jokeId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
}

export default JokeDetails;