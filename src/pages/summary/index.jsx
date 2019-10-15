import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import compare from './utils'
import * as S from "./styles";

const Summary = ({ election }) => {
  return (
    <S.Container>
      <span>ElectionID: {election.id}</span>
      <br />
      <span>{election.title}</span>
      {
        election.candidates.sort(compare).map((candidate, i) => (
          <>
            <S.Card>
              <span>
                {++i}º
          </span>
              <img src={candidate.photo} alt={candidate.name} />
              <div key={candidate.id}>
                <p>{candidate.name}</p>
                <p>{candidate.votes} vote(s)</p>
              </div>
            </S.Card>
          </>
        ))
      }
      <Link to={`/vote/${election.id}`}>Click to Vote</Link>
    </S.Container >
  );
};

export default Summary;
