import React from "react";

import VoteButton from "../VoteButton";

import * as S from "./styles";

const Card = ({ candidate }) => {
  return (
    <S.Container key={candidate.id}>
      <div>
        <img
          src={`https://robohash.org/${candidate.id}?set=set2&size=180x180`}
        />
      </div>
      <S.CardName>{candidate.name}</S.CardName>
      <S.CardVotes>{candidate.votes}</S.CardVotes>
      <VoteButton candidate={candidate} />
    </S.Container>
  );
};

export default Card;
