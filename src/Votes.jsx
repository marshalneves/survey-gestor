import React, { useState, useEffect } from "react";

import { addVoteTo, getFirst } from "./redux/actions";
import { connect } from "react-redux";

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
      <p>{JSON.stringify(candidates)}</p>
      <p>Votes Count: {votesCount}</p>
      <p>Last Vote: {lastVote}</p>
      <p>First: {first}</p>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            {candidate.name} - Votes: {candidate.votes}
            <button
              onClick={() => {
                addVoteTo(candidate);
              }}
            >
              Votar
            </button>
          </li>
        ))}
      </ul>
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
