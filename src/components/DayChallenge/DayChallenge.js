import Day1 from "./Days/Day1";
import Day2 from "./Days/Day2";
import Day3 from "./Days/Day3";
import { StatusContext } from "../../context/Context";
import { useContext } from "react";
import { MainWrapper } from "../../utils/GlobalStyles";
import { ChallengeLink } from "./DayChallenge.styled";

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
      return <ChallengeLink to="/challenges">Back to Challenges</ChallengeLink>;
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

  const Day = () => {
    switch (match.params.day) {
      case "day1":
        return <Day1 />;
      case "day2":
        return <Day2 />;
      case "day3":
        return <Day3 />;
      // case 'day4':
      //     return <Day4/>
      // case 'day5':
      //     return <Day5/>
      // case 'day6':
      //     return <Day6/>
      // case 'day7':
      //     return <Day7/>
      // case 'day8':
      //     return <Day8/>
      // case 'day9':
      //     return <Day9/>
      // case 'day10':
      //     return <Day10/>
      // case 'day11':
      //     return <Day11/>
      // case 'day12':
      //     return <Day12/>
      // case 'day13':
      //     return <Day13/>
      // case 'day14':
      //     return <Day14/>
      // case 'day15':
      //     return <Day15/>
      // case 'day16':
      //     return <Day16/>
      // case 'day17':
      //     return <Day17/>
      // case 'day18':
      //     return <Day18/>
      // case 'day19':
      //     return <Day19/>
      // case 'day20':
      //     return <Day20/>
      // case 'day21':
      //     return <Day21/>
      // case 'day22':
      //     return <Day22/>
      // case 'day23':
      //     return <Day23/>
      // case 'day24':
      //     return <Day24/>
      // case 'day25':
      //     return <Day25/>
      // case 'day26':
      //     return <Day26/>
      // case 'day27':
      //     return <Day27/>
      // case 'day28':
      //     return <Day28/>
      // case 'day29':
      //     return <Day29/>
      // case 'day30':
      //     return <Day30/>
      default:
        return (
          <div style={{ textAlign: "center" }}>
            No Challenges Available Yet!
          </div>
        );
    }
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
  console.log("current", savedDayProgress);
  if (savedDayProgress < dayIndex) {
    return (
      <MainWrapper>
        <h2>{`Day ${dayIndex}`}</h2>
        {/* <Day/> */}
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
      <Day />
      <StatusButton />
    </MainWrapper>
  );
};

export default DayChallenge;
