import React, {useState, useEffect, useCallback} from "react";

import JokeList from "./components/JokeList";
import AddJoke from "./components/AddJoke";
import "./App.css";
import { isEditable } from "@testing-library/user-event/dist/utils";

function App() {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokesHandler = useCallback(async () => {
    try{
      setIsLoading(true);
      setError(null);
      const response = await fetch(`https://react-lesson-d3b03-default-rtdb.firebaseio.com/jokes.json`)
      
      if(!response.ok){
        throw new Error('something wrong');
      }

      const data = await response.json();
      const loadedJokes = [];

      for(const key in data){
        loadedJokes.push({
          id:key,
          type: data[key].type,
          setup: data[key].setup,
          punchline: data[key].punchline
        });
      }
      console.log(loadedJokes);
      setJokes(loadedJokes);
        
    }catch(e){      
        setError(e.message);
    } 

    setIsLoading(false);
  }, []);
  
  useEffect(() => {
      fetchJokesHandler();
  }, [fetchJokesHandler]);

  const addJokeHandler = async (joke) => {
    console.log(joke);

    const response = await fetch(`https://react-lesson-d3b03-default-rtdb.firebaseio.com/jokes.json`, {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type':'application/json'
      }
    });

    const data = await response.json();
    fetchJokesHandler();
  }

  let content = <p>jokes not found</p>

  if(jokes !== null && jokes !== undefined && jokes.length > 0){
    content = <JokeList jokes={jokes}/>
  }

  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>loading</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddJoke onAddJoke={addJokeHandler}/>
      </section>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
