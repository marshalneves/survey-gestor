import React from "react";

import * as S from "./styles";

const MessageSpinner = ({ children }) => {
  return (
    <>
      <div>
        <h3>{children}</h3>
      </div>
      <S.SpinnerOverlay>
        <S.SpinnerContainer></S.SpinnerContainer>
      </S.SpinnerOverlay>
    </>
  );
};

export default MessageSpinner;
