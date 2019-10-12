import styled from "styled-components";
import { DefaultButtonStyle } from "../../styles/sharedcss";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  ${DefaultButtonStyle}
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
`;

export const CardName = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const CardVotes = styled.div`
  font-size: 4em;
`;

export const CardButton = styled.div`
  background-color: #008cba; /* Green */
  border-radius: 5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
