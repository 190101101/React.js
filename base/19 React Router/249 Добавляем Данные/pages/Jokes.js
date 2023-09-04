import JokeList from '../components/jokes/JokeList';

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
    {
        id: 'p3',
        topic: 'general',
        text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
];

const Jokes = () => {
    return (
        <JokeList jokes={DUMMY_JOKES}/>
    );
}

export default Jokes;