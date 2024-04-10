import React from "react";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ btnclicked }) => {
  const Buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {Buttons.map((Buttons) => (
        <button
          key={Buttons}
          onClick={() => btnclicked(Buttons)}
          className={styles.button}
        >
          {Buttons}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
