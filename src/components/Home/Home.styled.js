import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageLink = styled(Link)`
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
