import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import compare from './utils'
import * as S from "./styles";

const Summary = ({ election, hasVotes }) => {

  hasVotes = false;

  return (
    <S.Container>
      <S.Card>
        <S.CardTitle>
          {election.title}
        </S.CardTitle>
        {
          election.candidates.sort(compare).map((candidate, i) => (
            <S.CardItem>
              {
                hasVotes && (<div><span>{++i}º</span></div>)
              }
              <div>
                <img src={candidate.photo} alt={candidate.name} />
              </div>
              <div key={candidate.id}>
                <p>{candidate.name}</p>
                <p>{candidate.votes} vote(s)</p>
              </div>
            </S.CardItem>
          ))
        }
        <S.CardFooter>
          <Link to={`/vote/${election.id}`}>Click to Vote</Link>
        </S.CardFooter>
      </S.Card>
    </S.Container >
  );
};

export default Summary;
