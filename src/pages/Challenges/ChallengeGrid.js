import { useCallback, useContext } from "react";
import { ProgressContext, StatusContext } from "../../context/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChallengeGrid = () => {
  const { currentDayProgress } = useContext(ProgressContext);
  const { dayStatus } = useContext(StatusContext);

  const DaysArray = useCallback(() => {
    const daysArray = [];
    for (let i = 1; i <= 30; i++) {
      daysArray.push(
        <ChallengeLink
          className={`animate__animated animate__zoomIn ${dayStatus[i - 1]}`}
          currentdayprogress={currentDayProgress}
          index={i}
          delay={Math.random() * 1}
          key={i}
          to={`/challenges/day${i}`}
        >
          {i}
        </ChallengeLink>
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

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(6, 50px);
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ChallengeLink = styled(Link).attrs((props) => ({
  style: {
    animationDelay: `${props.delay}s`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;

  color: black;
  font-weight: bolder;
  text-decoration: none;
  /* border: solid 2px black; */
  border-radius: 10px;
  cursor: pointer;
  transition: all 150ms ease-in;
  background-color: rgba(123, 149, 251, 0.29); /* TODO: change this bg color */
  position: relative;
  border: solid 2px #14213d;
  /* background-color: ${({ index, currentdayprogress }) => {
    if (index === currentdayprogress) {
      return "#fca311";
    }
  }}; */

  &:hover {
    box-shadow: 0 0 10px darkgreen;
  }

  .done&::after {
    content: "";
    background-image: url("https://cdn-icons-png.flaticon.com/512/190/190411.png");
    background-size: 30px 30px;
    position: absolute;
    top: 13px;
    left: 13px;
    width: 30px;
    height: 30px;
  }

  .failed&::after {
    content: "";
    background-image: url("https://cdn-icons-png.flaticon.com/512/753/753345.png");
    background-size: 30px 30px;
    position: absolute;
    top: 13px;
    left: 13px;
    width: 30px;
    height: 30px;
  }

  .locked&::after {
    content: "";
    background-image: url("https://cdn-icons-png.flaticon.com/512/2913/2913133.png");
    background-size: 20px 20px;
    position: absolute;
    top: -5px;
    left: 39px;
    width: 20px;
    height: 20px;
  }
`;
