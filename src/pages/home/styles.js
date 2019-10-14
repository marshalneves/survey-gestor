import styled from "styled-components";
import { DefaultButtonStyle } from "../../styles/sharedcss";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  ${DefaultButtonStyle}

  a {
    margin-top: 20px;
  }
`;

// export const LinkButton = styled.div`
//   a {
//     border: 2px solid #da552f;
//     border-radius: 5px;
//     padding: 15px 32px;
//     text-align: center;
//     display: inline-block;
//     cursor: pointer;
//     color: #da552f;

//     :hover {
//       background: #da552f;
//       color: #fff;
//     }
//   }
// `;
