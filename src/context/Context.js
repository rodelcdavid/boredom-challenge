import React from "react";
import { useState } from "react";

export const StatusContext = React.createContext();

//Day Status
export const StatusProvider = (props) => {
  //initial state
  //can remove this savedstatus??
  const defaultDayStatus = ["todo"].concat(Array(29).fill("locked"));
  const savedStatus =
    JSON.parse(localStorage.getItem("dayStatus")) || defaultDayStatus;
  const [dayStatus, setDayStatus] = useState(savedStatus);

  return (
    <StatusContext.Provider
      value={{ dayStatus, setDayStatus, defaultDayStatus }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

// Day Progress
export const ProgressContext = React.createContext();
export const ProgressProvider = (props) => {
  //initial state
  // const savedProgress =
  //   JSON.parse(localStorage.getItem("currentDayProgress")) || 0;
  // const [currentDayProgress, setCurrentDayProgress] = useState(savedProgress);
  const [currentDayProgress, setCurrentDayProgress] = useState(0);

  return (
    <ProgressContext.Provider
      value={{ currentDayProgress, setCurrentDayProgress }}
    >
      {props.children}
    </ProgressContext.Provider>
  );
};
