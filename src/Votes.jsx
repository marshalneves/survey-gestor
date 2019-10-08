import React, { useState, useEffect } from "react";

import { addVoteTo, getFirst } from "./redux/actions";
import { connect } from "react-redux";
import './Votes.css';

const Votes = ({
  addVoteTo,
  getFirst,
  candidates,
  votesCount,
  lastVote,
  first
}) => {

  return (
    <>
      <div className='grid grid-template-columns-3'>
        {candidates.map(candidate => (
          <div className='card' key={candidate.id}>
            <div><img src={`https://robohash.org/${candidate.id}?set=set2&size=180x180`} /></div>
            <div className='card-name'>{candidate.name}</div>
            <div className='card-votes'>{candidate.votes}</div>
            <button
              className='button'
              onClick={() => {
                addVoteTo(candidate);
              }}
            >
              Votar
            </button>
          </div>
        ))}
        <div className='summary'>
          <h2>Summary</h2>
          <p>{JSON.stringify(candidates)}</p>
          <p>Votes Count: {votesCount}</p>
          <p>Last Vote: {lastVote}</p>
          <p>First: {first}</p>

        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  candidates: state.reducer.candidates,
  votesCount: state.reducer.votesCount,
  lastVote: state.reducer.lastVote,
  first: state.reducer.first
});

const mapDispatchToProps = dispatch => ({
  addVoteTo: candidate => dispatch(addVoteTo(candidate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Votes);
