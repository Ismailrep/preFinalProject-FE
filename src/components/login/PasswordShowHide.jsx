import { Formik } from "formik";
import React, { useState } from "react";
import LoginInput from "../inputs/loginInput";
import "./PasswordShowHide.css";

const PasswordShowHide = ({ field, meta }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = meta.touched[field.name] && meta.errors[field.name];

  return (
    <div className="input-container">
      <i
        className={hasError ? "icon-error icon" : "fa fa-key icon"}
        onClick={() => changeShowHidePassword(!showHidePassword)}
      >
        i
      </i>
      <LoginInput
        type={showHidePassword ? "text" : "password"}
        {...field}
        className={hasError ? "input-error input-field" : "input-field"}
        placeholder="Password"
      />
    </div>
  );
};

export default PasswordShowHide;