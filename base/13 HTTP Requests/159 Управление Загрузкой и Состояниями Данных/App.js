import React, {useState} from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJokesHandler = async () => {
    setIsLoading(true);
    const response = await fetch(`https://official-joke-api.appspot.com/random_ten`)
    const data = await response.json();
    setJokes(data);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
        {!isLoading && jokes.length === 0 && <div style={{color: 'yellow'}}>jokes not found</div>}
        {isLoading && <div style={{color: 'yellow'}}>loading</div>}
      </section>
    </React.Fragment>
  );
}

export default App;
