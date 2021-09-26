import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 55px);
  grid-template-rows: repeat(6, 55px);
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const DayLink = styled(Link).attrs((props) => ({
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
    top: 11px;
    left: 11px;
    width: 30px;
    height: 30px;
  }

  .failed&::after {
    content: "";
    background-image: url("https://cdn-icons-png.flaticon.com/512/753/753345.png");
    background-size: 30px 30px;
    position: absolute;
    top: 11px;
    left: 11px;
    width: 30px;
    height: 30px;
  }

  .locked&::after {
    content: "";
    background-image: url("https://cdn-icons-png.flaticon.com/512/2913/2913133.png");
    background-size: 20px 20px;
    position: absolute;
    top: -5px;
    left: 36px;
    width: 20px;
    height: 20px;
  }
`;
