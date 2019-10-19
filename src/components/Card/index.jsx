import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import * as S from "./styles";
import { createSelector } from 'reselect';

const Card = ({ election, candidate }) => {
  return (
    <S.Container key={candidate.id}>
      <div>
        <img src={candidate.photo} alt={candidate.name} />
      </div>
      <S.CardName>{candidate.name}</S.CardName>
      <S.CardVotes>{candidate.votes}</S.CardVotes>
      <Link to={`/checkout/${election.id}/${candidate.id}`} className="card-button">
        Vote
      </Link>
    </S.Container>
  );
};

// const totalVotes = createSelector(
//   state => state.elections.candidates,
//   (candidates) => {
//     return (
//       candidates.reduce((qtd, candidate) => qtd + candidate.totalVotes, 0);
//     );
//   };
// );

export default Card;
