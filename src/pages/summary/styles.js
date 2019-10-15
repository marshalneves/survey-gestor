import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`

  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 15px 15px 15px;
  margin: 0 auto;
  // box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  // border-top: 20px solid rgba(230, 236, 245, 0.4);

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
`;
