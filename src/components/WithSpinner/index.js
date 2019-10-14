import React from "react";

import * as S from "./styles";

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <>
        <div>
          <WrappedComponent {...otherProps} />
        </div>
        <S.SpinnerOverlay>
          <S.SpinnerContainer></S.SpinnerContainer>
        </S.SpinnerOverlay>
      </>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
