import React from "react";
import styles from "./InputFiled.module.css";

const InputFiled = ({ inputVal }) => {
  return (
    <input type="text" className={styles.display} readOnly value={inputVal} />
  );
};

export default InputFiled;
