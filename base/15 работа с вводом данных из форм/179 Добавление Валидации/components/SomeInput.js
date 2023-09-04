import {useState, useRef} from 'react';

const SomeInput = (props) => {

    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [isEnteredNameValid, isSetEnteredNameValid] = useState(true);
    
    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };

    const formSubmitHandler = (event) => {
      event.preventDefault();

      if(enteredName.trim() === ''){
        isSetEnteredNameValid(false);
        return;
      }
      isSetEnteredNameValid(true);

      console.log(enteredName);
      console.log(nameInputRef.current.value);
      setEnteredName("");      
    };

    const nameInputClasses = isEnteredNameValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          ref={nameInputRef} 
          onChange={nameInputChangeHandler} 
          value={enteredName} 
        />
        {!isEnteredNameValid && <p className="error-text">write name</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
