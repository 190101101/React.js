import useInput from '../hooks/useInput';

const isInputEmpty = (val) => val.trim() !== "";
const isEmailValid = (val) => val.includes('@');

const SomeForm = (props) => {

  const {
    value: enteredFirstName, 
    hasError: hasFirstNameInputError,
    isValid: isEnteredFirstNameValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: resetFirstNameInputValues,
  } = useInput(isInputEmpty);
  
  const {
    value: enteredLastName, 
    hasError: hasLastNameInputError,
    isValid: isEnteredLastNameValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputLostFocusHandler: lastNameInputLostFocusHandler,
    resetValues: resetLastNameInputValues,
  } = useInput(isInputEmpty);
  
  const {
    value: enteredEmail, 
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput(isEmailValid);

  const firstNameInputClasses = hasFirstNameInputError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = hasLastNameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = hasEmailInputError
    ? "form-control invalid"
    : "form-control";

  let isFormValid = false;

  if(isEnteredFirstNameValid && isEnteredLastNameValid && isEnteredEmailValid){
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(!isFormValid){
      return
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInputValues();
    resetLastNameInputValues();
    resetEmailInputValues();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">Введите Имя</label>
          <input 
            type="text" 
            id="firstname" 
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputLostFocusHandler}
          />
          {hasFirstNameInputError && <p className="error-text">write first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Введите Фамилию</label>
          <input 
            type="text" 
            id="lastname" 
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputLostFocusHandler}
            />
          {hasLastNameInputError && <p className="error-text">write last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите E-Mail</label>
        <input 
          type="text" 
          id="email" 
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
        />
        {hasEmailInputError && <p className="error-text">write email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
