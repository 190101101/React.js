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
];

const Jokes = () => {
    return (
        <JokeList jokes={DUMMY_JOKES}/>
    );
}

export default Jokes;