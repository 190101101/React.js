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
      const response = await fetch(`https://react-lesson-d3b03-default-rtdb.firebaseio.com/`)
      
      if(!response.ok){
        throw new Error('something wrong');
      }

      const data = await response.json();

      setJokes(data);
        
    }catch(e){      
        setError(e.message);
    } 

    setIsLoading(false);
  }, []);
  
  useEffect(() => {
      fetchJokesHandler();
  }, [fetchJokesHandler]);

  const addJokeHandler = (joke) => {
    console.log(joke);
  }

  let content = <p>jokes not found</p>

  if(jokes.length > 0){
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
