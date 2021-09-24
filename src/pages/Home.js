import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/Context";
import { useContext } from "react";
import { MainWrapper } from "../utils/MainWrapper";

const Home = () => {
  //fix starting and continue on refresh
  const { currentDayProgress } = useContext(ProgressContext);

  const StartContinue = () => {
    if (currentDayProgress === 0) {
      return <StyledLink to="/challenges">Start the challenge!</StyledLink>;
    } else {
      return <StyledLink to="/challenges">Continue the challenge!</StyledLink>;
    }
  };

  return (
    <MainWrapper>
      <h1 style={{ fontSize: "3rem", marginTop: "3rem" }}>
        Get your brain
        <br /> to focus more than ever.
      </h1>
      <p style={{ fontSize: "1.5rem", marginTop: "1.5rem" }}>
        Take back your attention span
        <br /> by embracing boredom!
      </p>

      <div style={{ marginTop: "2rem" }}>
        <StyledLink to="/motivation">Motivation</StyledLink>
        <StartContinue />
      </div>
    </MainWrapper>
  );
};

const StyledLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 1rem 2rem;
  border: solid 3px #14213d;
  font-weight: bolder;
  width: 200px;
  border-radius: 20px;
  margin: 0.5rem auto;
  background-color: #fca311;
  transition: all 150ms ease-in;
  &:hover {
    color: black;
    background-color: #e5e5e5;
    border-color: #14213d;
  }
`;

export default Home;
