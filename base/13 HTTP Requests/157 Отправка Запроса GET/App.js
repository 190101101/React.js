import React, {useState} from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([]);

  const fetchJokesHandler = () => {
    fetch(`https://official-joke-api.appspot.com/random_ten`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('done');
      setJokes(data);
    })
    .catch(err => {console.log(err)});
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        <JokeList jokes={jokes} />
      </section>
    </React.Fragment>
  );
}

export default App;
