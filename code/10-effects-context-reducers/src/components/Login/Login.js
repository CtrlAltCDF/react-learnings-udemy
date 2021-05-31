import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      ...state,
      value: action.payload,
      isValid: action.payload.includes("@"),
    };
  }
  if (action.type === "VALIDATE") {
    return {
      ...state,
      isValid: state.value.includes("@"),
    };
  }
  return { value: "", isValid: undefined };
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload.trim().length >= 6,
      };
    case "VALIDATE":
      return {
        ...state,
        isValid: state.value.trim().length >= 6,
      };
    default:
      return state;
  }
};

const Login = (props) => {
  // state
  const [formIsValid, setFormIsValid] = useState(false);

  // reducers
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  // use effect
  const { isValid: isEmailValid } = emailState; // alias assignment
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("CALL TO REVALIDATE!!!");
      setFormIsValid(isPasswordValid && isEmailValid);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [isEmailValid, isPasswordValid]);

  // input handlers
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  // input validations
  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "VALIDATE" });
  };

  // component
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
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
