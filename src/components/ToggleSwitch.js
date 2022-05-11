import React from "react";
import { useContext } from "react";
import AuthContext from "../stor/auth-context";
import "./ToggleSwitch.css";
  
const ToggleSwitch = ({ label }) => {
    const cont = useContext(AuthContext)
    console.log(cont.done);
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input onClick={cont.setDone} type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;