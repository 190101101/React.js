import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from '../../contexts/AuthContext';

const emailReducer = (prevState, action) => {

  if(action.type === 'USER_INPUT'){
    return {
        value: action.value,
      isValid: action.value.includes('@')
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: prevState.value,
      isValid: prevState.value.includes('@'),
    }
  }
  return {
    value: '',
    isValid: false
  }
}

const passwordReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.value,
      isValid: action.value.trim().length > 7
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    }
  }
  return {
    value: '',
    isValid: false
  }
}

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, { 
    value: '', isValid: undefined, 
  });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, { 
    value: '', isValid: undefined, 
  });

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
      console.log('effect');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [emailState.value, passwordState.value]);
  
  const emailChangeHandler = (event) => {
    dispatchEmailState({type:'USER_INPUT', value: event.target.value});

    setFormIsValid(
      emailIsValid && passwordIsValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type:'USER_INPUT', value: event.target.value});

    setFormIsValid(
      passwordIsValid && emailIsValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
        emailInputRef.current.focus();
      }else if(!passwordIsValid){
        passwordInputRef.current.focus();
    }
  };

  return (
    
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            label='email' 
            type="email"
            id="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
            ref={passwordInputRef}
            label='password' 
            type="password"
            id="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
