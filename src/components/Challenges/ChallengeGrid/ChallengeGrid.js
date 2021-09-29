import { useCallback, useContext } from "react";
import { ProgressContext, StatusContext } from "../../../context/Context";
import { DayLink, GridWrapper } from "./ChallengeGrid.styled.";

const ChallengeGrid = () => {
  const { currentDayProgress } = useContext(ProgressContext);
  const { dayStatus } = useContext(StatusContext);

  //try to use map instead of for loop once you have the data for the daychallenges
  const DaysArray = useCallback(() => {
    const daysArray = [];
    for (let i = 1; i <= 30; i++) {
      daysArray.push(
        <DayLink
          className={`animate__animated animate__zoomIn ${dayStatus[i - 1]}`}
          currentdayprogress={currentDayProgress}
          index={i}
          delay={Math.random() * 1}
          key={i}
          to={`/challenges/day${i}`}
        >
          {i}
        </DayLink>
      );
    }
    return daysArray;
  }, [currentDayProgress, dayStatus]);

  return (
    <GridWrapper>
      <DaysArray />
    </GridWrapper>
  );
};
export default ChallengeGrid;
