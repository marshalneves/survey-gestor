import React from "react";
import CardList from "../../components/CardList";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import * as S from "./styles";

const Vote = ({ elections, match }) => {

  const election = elections.filter(e => e.id === parseInt(match.params.electionId))[0];

  return (
    <>
      <PageHeader title={election.title} />
      <S.Container>
        <CardList election={election} />
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
