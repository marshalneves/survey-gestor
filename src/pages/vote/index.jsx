import React from "react";
import CardList from "../../components/CardList";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import * as S from "./styles";

import { selectElectionCandidates } from '../../redux/selectors';

const Vote = ({ elections, match }) => {

  const electionId = parseInt(match.params.electionId);
  const election = elections.filter(e => e.id === electionId)[0];

  return (
    <>
      <p>{JSON.stringify(election)}</p>
      {election && <PageHeader title={election.title} />}
      <S.Container>
        {election &&
          <>
            <CardList election={election} />
          </>
        }
        {!election &&
          <span>{"Sorry, election not found..."}</span>
        }
      </S.Container>
    </>
  );
};

const mapStateToProps = state => ({
  elections: state.reducer.elections
});

export default connect(
  mapStateToProps,
  null
)(Vote);
