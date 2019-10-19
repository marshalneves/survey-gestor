import React from "react";
import CardList from "../../components/CardList";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import * as S from "./styles";

import { selectElection } from '../../redux/selectors';

const Vote = ({ election }) => {

  return (
    <>
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

const mapStateToProps = (state, ownProps) => ({
  elections: state.reducer.elections,
  election: selectElection(ownProps.match.params.electionId)(state.reducer)
});

export default connect(
  mapStateToProps,
  null
)(Vote);
