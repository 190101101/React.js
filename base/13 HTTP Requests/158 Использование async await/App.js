import React, {useState} from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([]);

  const fetchJokesHandler = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/random_ten`)
    const data = await response.json();
    setJokes(data);
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
