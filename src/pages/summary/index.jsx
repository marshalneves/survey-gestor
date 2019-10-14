import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as S from "./styles";

const compare = (a, b) => {
  const objA = a.votes;
  const objB = b.votes;

  let comparison = 0;
  if (objA > objB) {
    comparison = -1;
  } else if (objA < objB) {
    comparison = 1;
  }
  return comparison;
};

const Summary = ({ votesCount, monsters }) => {
  return (
    <S.Container>
      {monsters.sort(compare).map((monster, i) => (
        <S.Card>
          {++i}º
          <img src={monster.photo} alt={monster.name} />
          <div key={monster.id}>
            <p>{monster.name}</p>
            <p>{monster.votes} vote(s)</p>
          </div>
        </S.Card>
      ))}
      {/* <b>Votes Count:</b> {votesCount} */}
    </S.Container>
  );
};

const mapStateToProps = state => ({
  monsters: state.reducer.candidates,
  votesCount: state.reducer.votesCount
});

export default connect(mapStateToProps)(Summary);
