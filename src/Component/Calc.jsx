import React from "react";

import styles from "./Calc.module.css";
import InputFiled from "./InputFiled";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

const Calc = () => {
  const [calval, setCalVal] = useState([]);

  const onclickbtn = (btntxt) => {
    if (btntxt === "C") {
      setCalVal("");
    } else if (btntxt === "=") {
      const reSult = eval(calval);
      setCalVal(reSult);
    } else {
      const newVal = calval + btntxt;
      setCalVal(newVal);
    }
  };

  return (
    <div className={styles.Container}>
      <InputFiled inputVal={calval} />
      <ButtonContainer btnclicked={onclickbtn} />
    </div>
  );
};

export default Calc;
