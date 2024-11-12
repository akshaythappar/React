import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn=isOn ? "on" : "Off";
  const toggleBGColor={backgroundColor:isOn?"#4caf50":"#f44336"}
  const handleToggleSwitch = ()=>{
    setIsOn(!isOn);
  }
  return (
    <>
      <div className="toggle-switch" onClick={handleToggleSwitch} style={toggleBGColor}>
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
