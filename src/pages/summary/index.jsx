import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectVotesCount} from '../../redux/selectors'

import compare from './utils'
import * as S from "./styles";

const Summary = ({ election, totalVotes }) => {
  return (
    <S.Container>
      <S.Card>
        <S.CardTitle>
            {election.title}  
          <S.CardSubTitle>
            Total Votes: {totalVotes}
          </S.CardSubTitle>
        </S.CardTitle>
        {
          election.candidates.sort(compare).map((candidate, i) => (
            <S.CardItem>
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

const mapStateToProps = (state, ownProps) => ({
  totalVotes: selectVotesCount(ownProps.election.id)(state.reducer)
});

export default connect(mapStateToProps)(Summary);
