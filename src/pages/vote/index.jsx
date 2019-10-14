import React from "react";
import CardList from "../../components/CardList";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import * as S from "./styles";

const Vote = ({ candidates }) => {
  return (
    <>
      <PageHeader title="Choose your monster!" />
      <S.Container>
        <CardList candidates={candidates} />
      </S.Container>
    </>
  );
};

const mapStateToProps = state => ({
  candidates: state.reducer.candidates
});

export default connect(
  mapStateToProps,
  null
)(Vote);
