import { MainWrapper } from "../../utils/GlobalStyles";
import { PageLink } from "./Home.styled";

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
      <h1 style={{ fontSize: "2rem", lineHeight: "1.2" }}>
        Get your brain to focus more than ever.
      </h1>
      <p style={{ fontSize: "1rem" }}>
        Take back your attention span by embracing boredom!
      </p>

      <div style={{ margin: "2rem auto" }}>
        <PageLink to="/motivation">Motivation</PageLink>
        <PageLink to="/challenges">Challenges</PageLink>
      </div>
    </MainWrapper>
  );
};

export default Home;
