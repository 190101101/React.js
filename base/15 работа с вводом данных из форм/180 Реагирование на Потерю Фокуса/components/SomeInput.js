import {useState, useRef, useEffect} from 'react';

const SomeInput = (props) => {

    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [isEnteredNameValid, isSetEnteredNameValid] = useState(false);
    const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

    useEffect(() => {
      if(isEnteredNameValid){
        console.log('input data is valid');
      }
    }, [isEnteredNameValid]);
    
    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
    
    const nameInputLostFocusHandler = (event) => {
      setWasNameInputTouched(true);
      
      if(enteredName.trim() === ''){
        isSetEnteredNameValid(false);
        return;
      }
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

    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
    const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          ref={nameInputRef} 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputLostFocusHandler} 
          value={enteredName} 
        />
        {isNameInputInvalid && <p className="error-text">write name</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
