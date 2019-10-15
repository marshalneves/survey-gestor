import styled from "styled-components";
import { DefaultButtonStyle } from "../../styles/sharedcss";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${DefaultButtonStyle}

  a {
    margin-left: 80px;
  }
`;