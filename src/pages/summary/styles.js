import styled from "styled-components";
import { DefaultButtonStyle } from "../../styles/sharedcss";

export const Container = styled.div`

text-align: center;
margin: 0 auto;


  span {
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    margin-left: 20px;
  }

  img {
    padding-top: 0px;
    width: 50px;
    height: 50px;
  }

  ${DefaultButtonStyle}

  a {
    margin: 0 auto;
  }

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 0 auto;

`;



export const CardItem = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

export const CardTitle = styled.div`

    text-align: center;
    padding: 10px;
    margin: 0 auto;
    font-size: 1.5em;

`;

export const CardSubTitle = styled.div`

    text-align: center;
    padding: 10px;
    margin: 0 auto;
    font-size: 0.7em;

`;

export const CardFooter = styled.div`

    text-align: center;
    padding: 10px;
    margin: 0 auto;
    font-size: 1.5em;

`;