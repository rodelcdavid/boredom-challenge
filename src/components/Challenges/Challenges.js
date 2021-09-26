import { ProgressContext, StatusContext } from "../../context/Context";
import { useContext, useEffect } from "react";
import ChallengeGrid from "./ChallengeGrid/ChallengeGrid";
import { MainWrapper } from "../../utils/GlobalStyles";
import { StartButton, ResetButton } from "./Challenges.styled";

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
          <h1>Challenges</h1>
          <p>Current Day: {displayDayProgress}/30</p>
        </MainWrapper>
        <ChallengeGrid />
        <ResetButton onClick={handleOnClickReset}>Reset</ResetButton>
      </>
    );
  } else {
    return (
      <MainWrapper>
        <h2>Ready to take on the challenges?</h2>
        <StartButton onClick={handleOnClickStart}>
          Start the Challenge
        </StartButton>
      </MainWrapper>
    );
  }
};

export default Challenges;
