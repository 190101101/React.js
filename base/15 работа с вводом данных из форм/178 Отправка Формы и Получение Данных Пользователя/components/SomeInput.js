import {useState, useRef} from 'react';

const SomeInput = (props) => {

    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    
    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };

    const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log(enteredName);
      console.log(nameInputRef.current.value);
      setEnteredName("");      
    };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          ref={nameInputRef} 
          onChange={nameInputChangeHandler} 
          value={enteredName} 
        />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
