import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Button.module.css";

const Button = (props) => {
  const btnCtx = useContext(AuthContext);
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={btnCtx.onLogOut}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
