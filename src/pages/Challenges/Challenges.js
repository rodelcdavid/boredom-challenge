import { StatusContext, ProgressContext } from "../../context/Context";
import { useContext, useEffect } from "react";
import ChallengeGrid from "./ChallengeGrid";
import { MainWrapper } from "../../utils/MainWrapper";
import styled from "styled-components";

const Challenges = () => {
  const { dayStatus, setDayStatus, defaultDayStatus } =
    useContext(StatusContext);
  const { currentDayProgress, setCurrentDayProgress } =
    useContext(ProgressContext);

  //Challenges componentdidmount
  //TODO: solve the useffect warning without disabling eslint
  useEffect(() => {
    const date = new Date();
    // const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const currentDate = new Date(2021, 8, 26);
    const startingDateString = JSON.parse(localStorage.getItem("startingDate"));
    const startingDate = new Date(startingDateString);

    if (startingDateString === null) {
      const tempProgress = 0;
      setCurrentDayProgress(tempProgress);
    } else {
      const tempProgress = Math.ceil(
        (currentDate - startingDate) / (1000 * 60 * 60 * 24) + 1
      );
      setCurrentDayProgress(tempProgress);

      //Status

      const tempDayStatus = dayStatus.map((item, i) => {
        if (i + 1 <= tempProgress && item !== "failed" && item !== "done") {
          return "todo";
        } else if (i + 1 > tempProgress) {
          // just to make sure if they go back in date it will lock future
          return "locked";
        } else {
          return item;
        }
      });
      setDayStatus(tempDayStatus);
    }
    // eslint-disable-next-line
  }, []);

  //Reset Button
  const handleOnClickReset = () => {
    setDayStatus(defaultDayStatus);
    localStorage.removeItem("startingDate");
    setCurrentDayProgress(0);
  };

  //Start Challenge
  const handleOnClickStart = () => {
    const date = new Date();
    const startingDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    localStorage.startingDate = JSON.stringify(startingDate);
    setCurrentDayProgress(currentDayProgress + 1);
  };

  //save to localstorage everytime daystatus change
  useEffect(() => {
    localStorage.dayStatus = JSON.stringify(dayStatus);
  }, [dayStatus]);

  const displayDayProgress = currentDayProgress > 30 ? 30 : currentDayProgress;
  if (currentDayProgress > 0) {
    return (
      <>
        <MainWrapper>
          <h1 style={{ textAlign: "center" }}>Challenges</h1>
          <p style={{ textAlign: "center" }}>
            Current Day: {displayDayProgress}/30
          </p>
        </MainWrapper>

        <ChallengeGrid />

        <ResetButton onClick={handleOnClickReset}>Reset</ResetButton>
      </>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          flexDirection: "column",
        }}
      >
        <h2>Ready to take on the challenges?</h2>
        <StartButton onClick={handleOnClickStart}>
          Start the Challenge
        </StartButton>
      </div>
    );
  }
};

const ResetButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #fca311;
  padding: 0.2rem 0.8rem;
  width: 150px;
  border: solid 2px #14213d;
  border-radius: 10px;
  font-weight: bolder;
  cursor: pointer;
`;

const StartButton = styled.button`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fca311;
  border: solid 2px #14213d;
  border-radius: 10px;
  font-weight: bolder;
  cursor: pointer;
`;

export default Challenges;
