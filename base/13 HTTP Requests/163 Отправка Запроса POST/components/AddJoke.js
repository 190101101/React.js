import React, {useRef} from "react";

import styles from "./AddJoke.module.css";

const AddJoke = (props) => {
  const typeRef = useRef('');
  const setupRef = useRef('');
  const punchlineRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value,
    }

    props.onAddJoke(joke);
  }

  return (
    <form onSubmit={submitHandler} className={styles.control}>
      <div>
        <label htmlFor="type">Type</label>
        <input ref={typeRef} type="text" id="type"/>
      </div>
      <div>
        <label htmlFor="setup">Setup</label>
        <textarea ref={setupRef} rows={5} type="text" id="setup"></textarea>
      </div>
      <div>
        <label htmlFor="pucnline">pucnline</label>
        <textarea ref={punchlineRef} rows={5} type="text" id="pucnline"></textarea>
      </div>
      <div>
        <button type="submit">add joke</button>
      </div>
    </form>
  );
};

export default AddJoke;
