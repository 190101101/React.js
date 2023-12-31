import {useState} from 'react';

const SomeInput = (props) => {

    const [enteredName, setEnteredName] = useState("");
    const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
    let isFormValid = false;

    const isEnteredNameValid = enteredName.trim() !== "";
    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

    if(isEnteredNameValid){
      isFormValid = true;
    }

    const nameInputChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
    
    const nameInputLostFocusHandler = (event) => {
      setWasNameInputTouched(true);
    };
    
    const formSubmitHandler = (event) => {
      event.preventDefault();

      setWasNameInputTouched(true);

      if(!isEnteredNameValid){
        return;
      }

      console.log(enteredName);
      setEnteredName("");
      setWasNameInputTouched(false);
    };

    const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input 
          type="text" 
          id="name" 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputLostFocusHandler} 
          value={enteredName} 
        />
        {isNameInputInvalid && <p className="error-text">write name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
