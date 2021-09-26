import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainWrapper } from "../../utils/GlobalStyles";

const Home = () => {
  // //fix starting and continue on refresh
  // const { currentDayProgress } = useContext(ProgressContext);

  // const StartContinue = () => {
  //   if (currentDayProgress === 0) {
  //     return <StyledLink to="/challenges">Start the challenge!</StyledLink>;
  //   } else {
  //     return <StyledLink to="/challenges">Continue the challenge!</StyledLink>;
  //   }
  // };

  return (
    <MainWrapper>
      <h1 style={{ fontSize: "3rem", lineHeight: "1.2" }}>
        Get your brain to focus more than ever.
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        Take back your attention span by embracing boredom!
      </p>

      <div style={{ margin: "2rem auto" }}>
        <StyledLink to="/motivation">Motivation</StyledLink>
        <StyledLink to="/challenges">Challenges</StyledLink>
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
