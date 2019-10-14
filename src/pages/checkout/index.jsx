import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addVoteTo } from "../../redux/actions";
import { Redirect } from "react-router-dom";
import * as S from "./styles";
import MessageSpinner from "../../components/MessageSpinner";

const Checkout = ({ addVoteTo, match }) => {
  const [isLoading, setIsLoading] = useState(true);

  const candidateId = parseInt(match.params.id);

  useEffect(() => {
    addVoteTo(candidateId);
    setTimeout(() => setIsLoading(false), 2000);
  }, [candidateId, addVoteTo]);

  return (
    <S.Container>
      <MessageSpinner>
        We are computing your vote! Wait few seconds...
      </MessageSpinner>
      {!isLoading && <Redirect to="/" />}
    </S.Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addVoteTo: candidateId => {
    dispatch(addVoteTo(candidateId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Checkout);
