import React from "react";

import * as S from "./styles";

const PageHeader = ({ title }) => {
  return (
    <S.Container>
      <header>
        <h1>{title}</h1>
      </header>
    </S.Container>
  );
};

export default PageHeader;
