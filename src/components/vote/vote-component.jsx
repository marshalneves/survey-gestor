import React from "react";
import { connect } from "react-redux";
import CardList from '../card-list/card-list.component'

import './vote.styles.css';

const Votes = ({
  candidates,
  votesCount,
  lastVote,
  first
}) => {

  return (
    <div className='vote-container'>
      <CardList candidates={candidates} />
      {/* <div className='summary'>
        <h2>Summary</h2>
        <p>Votes Count: {votesCount}</p>
        <p>Last Vote: {lastVote}</p>
        <p>First Place: {first}</p>

      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  candidates: state.reducer.candidates,
  votesCount: state.reducer.votesCount,
  lastVote: state.reducer.lastVote,
  first: state.reducer.first
});

export default connect(
  mapStateToProps,
  null
)(Votes);
