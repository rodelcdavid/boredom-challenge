import { ProgressContext, StatusContext } from "../../context/Context";
import { useState, useContext, useEffect } from "react";
import ChallengeGrid from "./ChallengeGrid/ChallengeGrid";
import { MainWrapper } from "../../utils/GlobalStyles";
import { StartButton, ResetButton } from "./Challenges.styled";
import ResetModal from "./ResetModal/ResetModal";

const Challenges = () => {
  const { dayStatus, setDayStatus, defaultDayStatus } =
    useContext(StatusContext);
  const { currentDayProgress, setCurrentDayProgress } =
    useContext(ProgressContext);

  const [isOpen, setIsOpen] = useState(false);

  //Challenges componentdidmount
  //TODO: solve the useffect warning without disabling eslint
  //turn this into custom hook
  useEffect(() => {
    const date = new Date();
    // const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const currentDate = new Date(2021, 10, 5);

    const startingDateString = JSON.parse(localStorage.getItem("startingDate"));
    console.log("start", startingDateString);
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
    setIsOpen(false);
  };

  //Start Challenge
  // starting date state
  // starting date and currentdayprogress in the same object
  // const date = {start: (date), current: (date)}
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
  //turn this into custom hook => useLocalStorage
  useEffect(() => {
    localStorage.dayStatus = JSON.stringify(dayStatus);
    localStorage.currentDayProgress = JSON.stringify(currentDayProgress);
  }, [dayStatus, currentDayProgress]);

  //congratulations
  const totalFinish = dayStatus.filter((status) => {
    return status === "failed" || status === "done";
  });
  console.log("total", totalFinish); //why is this rendering twice?

  if (totalFinish.length === 30) {
    return (
      <>
        <h1>Congratulations!</h1>
        <ResetButton onClick={() => setIsOpen(true)}>Reset</ResetButton>
        <ResetModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onReset={handleOnClickReset}
        >
          Are you sure you want to reset your progress?
        </ResetModal>
      </>
    );
  } else if (currentDayProgress > 0) {
    return (
      <MainWrapper>
        <h2>Challenges</h2>
        <p style={{ fontSize: "0.8rem" }}>
          Current Day: {currentDayProgress > 30 ? 30 : currentDayProgress}/30
        </p>

        <ChallengeGrid />
        <ResetButton onClick={() => setIsOpen(true)}>Reset</ResetButton>
        <ResetModal
          open={isOpen}
          onClose={() => setIsOpen(false)} //TODO: set animation onclose
          onReset={handleOnClickReset}
        >
          Are you sure you want to reset your progress?
        </ResetModal>
      </MainWrapper>
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
