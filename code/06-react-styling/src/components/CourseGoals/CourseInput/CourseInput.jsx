import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const goalInput = event.target.value;
    if (goalInput.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(goalInput);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // const formStyles = () => {
  //   let formStyle = styles["form-control"];
  //   // formStyle += isValid ? styles.invalid : "";
  //   console.log(formStyle);
  //   return formStyle.toString();
  // };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`${isValid !== true ? "invalid" : ""}`}> */}
      <div
        className={`
          ${styles["form-control"]} 
          ${isValid !== true ? styles.invalid : ""}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
