import React from "react";

import { Link } from "react-router-dom";
import * as S from "./styles";

const Card = ({ candidate }) => {
  return (
    <S.Container key={candidate.id}>
      <div>
        <img src={candidate.photo} alt={candidate.name} />
      </div>
      <S.CardName>{candidate.name}</S.CardName>
      <S.CardVotes>{candidate.votes}</S.CardVotes>
      <Link to={`/checkout/${candidate.id}`} className="card-button">
        Vote
      </Link>
    </S.Container>
  );
};

export default Card;
