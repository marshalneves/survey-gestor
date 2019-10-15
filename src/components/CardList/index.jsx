import React from "react";

import Card from "../Card";
import * as S from "./styles";

const CardList = ({ candidates }) => {
  return (
    <S.Container>
      {candidates.map(candidate => (
        <Card as='div' key={candidate.id} candidate={candidate} />
      ))}
    </S.Container>
  );
};

export default CardList;
