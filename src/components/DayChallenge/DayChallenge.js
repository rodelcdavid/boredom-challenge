import { StatusContext } from "../../context/Context";
import { useContext } from "react";
import { MainWrapper } from "../../utils/GlobalStyles";
import { ChallengeLink } from "./DayChallenge.styled";
import DayContent from "./Days/DayContent";
import { dayList } from "./Days/dayList";

const DayChallenge = ({ match }) => {
  const { dayStatus, setDayStatus } = useContext(StatusContext);
  const savedDayProgress = JSON.parse(
    localStorage.getItem("currentDayProgress")
  );

  const handleOnClickStatus = (e) => {
    const tempDayStatus = [...dayStatus];
    const index = Number(e.target.getAttribute("day").substr(3));

    if (e.target.innerHTML === "Failed") {
      tempDayStatus[index - 1] = "failed";
      setDayStatus(tempDayStatus);
    }
    if (e.target.innerHTML === "Done") {
      tempDayStatus[index - 1] = "done";
      setDayStatus(tempDayStatus);
    }
  };

  const StatusButton = () => {
    const isFinished =
      dayStatus[dayIndex - 1] === "done" || dayStatus[dayIndex - 1] === "failed"
        ? true
        : false;

    if (savedDayProgress >= dayIndex && isFinished) {
      return (
        <>
          <h1>{dayStatus[dayIndex - 1]}</h1>
          <ChallengeLink to="/challenges">Back to Challenges</ChallengeLink>
        </>
      );
    }
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <ChallengeLink
          to="/challenges"
          onClick={handleOnClickStatus}
          day={match.params.day}
        >
          Failed
        </ChallengeLink>
        <ChallengeLink
          to="/challenges"
          onClick={handleOnClickStatus}
          day={match.params.day}
        >
          Done
        </ChallengeLink>
      </div>
    );
  };

  const startingDateString = JSON.parse(localStorage.getItem("startingDate"));
  const startingDate = new Date(startingDateString);
  const dayIndex = Number(match.params.day.substr(3));

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    const formattedDate =
      result.toString().slice(0, 10) + "," + result.toString().slice(10, 15);
    return formattedDate;
  };

  const challengeDay = addDays(startingDate, dayIndex - 1);

  if (savedDayProgress < dayIndex) {
    return (
      <MainWrapper>
        <h2>{`Day ${dayIndex}`}</h2>
        <br />
        <h1>This day is still locked.</h1>
        <p>
          Come back on{" "}
          <span style={{ fontWeight: "bolder", color: "#fca311" }}>
            {challengeDay}
          </span>{" "}
          to do another challenge.
        </p>
        <br />
        <ChallengeLink to="/challenges">Back to Challenges</ChallengeLink>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <h2>{`Day ${dayIndex}`}</h2>
      <p style={{ color: "#fca311", fontWeight: "600" }}>{challengeDay}</p>
      {dayList[dayIndex - 1] ? (
        <DayContent
          title={dayList[dayIndex - 1].title}
          img={dayList[dayIndex - 1].img}
          desc={dayList[dayIndex - 1].desc}
          link={dayList[dayIndex - 1].link}
        />
      ) : (
        <h3>No Challenge Available Yet</h3>
      )}
      <StatusButton />
    </MainWrapper>
  );
};

export default DayChallenge;
