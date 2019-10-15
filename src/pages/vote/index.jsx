import React from "react";
import CardList from "../../components/CardList";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import * as S from "./styles";

const Vote = ({ elections, match }) => {

  const election = elections.filter(e => e.id === parseInt(match.params.electionId));

  return (
    <>
      <PageHeader title={election[0].title} />
      <S.Container>
        <CardList candidates={election[0].candidates} />
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
