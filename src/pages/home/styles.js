import styled from "styled-components";
import { DefaultButtonStyle } from "../../styles/sharedcss";
// const OptionContainerStyles = css`

// `

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: center;
  align-items: center;

  ${DefaultButtonStyle}
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
