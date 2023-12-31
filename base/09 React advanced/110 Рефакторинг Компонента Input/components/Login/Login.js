import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/AuthContext";

const emailReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    }
  }
  return {
    value: "",
    isValid: false,
  }
};

const passwordReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value,
      isValid: prevState.value.trim().length > 7,
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    }
  }
  return {
    value: "",
    isValid: false,
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '', 
    isValid: undefined
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: '', 
    isValid: undefined
  });

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  const ctx = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    }, 300)
    return () => {
      clearTimeout(timer);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({
      type: 'USER_INPUT',
      value: event.target.value
    })
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({
      type: 'USER_INPUT',
      value: event.target.value
    })
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchEmailState({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input 
          type='email' 
          label='email' 
          id='email' 
          isValid={emailIsValid} 
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input 
          type='password' 
          label='password' 
          id='password' 
          isValid={passwordIsValid} 
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
