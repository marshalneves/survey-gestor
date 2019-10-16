import React from "react";

import Card from "../Card";
import * as S from "./styles";

const CardList = props => {
  const election = props.election;
  return (
    <S.Container>
      {
        election.candidates.map(candidate => {
          return (<Card as='div' key={election.id + candidate.id} election={election} candidate={candidate} />)
        })
      }
    </S.Container>
  );
};

export default CardList;
