import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addVoteTo } from "../../redux/actions";
import { Redirect, useParams } from "react-router-dom";
import * as S from "./styles";
import MessageSpinner from "../../components/MessageSpinner";

const Checkout = ({ addVoteTo, match }) => {
  const [isLoading, setIsLoading] = useState(true);

  // const electionId = parseInt(match.params.electionId);
  // const candidateId = parseInt(match.params.candidateId);
  const params = useParams();
  const electionId = parseInt(params.electionId);
  const candidateId = parseInt(params.candidateId);

  useEffect(() => {
    addVoteTo(electionId, candidateId);
    setTimeout(() => setIsLoading(false), 2000);
  }, [electionId, candidateId, addVoteTo]);

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
  addVoteTo: (electionId, candidateId) => {
    dispatch(addVoteTo(electionId, candidateId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Checkout);
