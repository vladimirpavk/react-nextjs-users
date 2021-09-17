import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action)=>{ 
  switch(action.type){
    case "EMAIL_UPDATED":{
      return {
        value: action.value,
        isValid: action.value.includes('@')
      }    
    }
    default:{    
      return {
        value: '',
        isValid: false
      }  
    }
  }
}

const passwordReducer = (state, action)=>{
  switch(action.type){
    case "PASS_UPDATED":{
      return {
        value: action.value,
        isValid: action.value.trim().length > 6
      }    
    }
    default:{    
      return {
        value: '',
        isValid: false
      }  
    }
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false); 

  const [emailState, emailDispatcher] = useReducer(emailReducer, {value: '', isValid: false});

  const emailChangeHandler = (event) => {
    emailDispatcher({
      type:'EMAIL_UPDATED',
      value: event.target.value
    });
  };

  const [passwordState, setPasswordState] = useReducer(passwordReducer, {value: '', isValid:false});

  const passwordChangeHandler = (event) => {
    setPasswordState({
      type: 'PASS_UPDATED',
      value: event.target.value      
    })
  }; 

  useEffect(()=>{
    console.log(emailState.isValid && passwordState.isValid);
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formIsValid);
    /* props.onLogin(enteredEmail, enteredPassword); */
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>    
        <div className={`${classes.control} ${!emailState.isValid ? classes.invalid: ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value= {emailState.value}
            onChange={emailChangeHandler}
          />             
        </div>   
        <div className={`${classes.control} ${!passwordState.isValid ? classes.invalid: ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
          />        
        </div>              
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
