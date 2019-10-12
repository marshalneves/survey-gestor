import React from "react";
import { connect } from "react-redux";
import { addVoteTo } from "../../redux/actions";
import { Link } from "react-router-dom";

import * as S from "./styles";

const VoteButton = ({ candidate, addVoteTo }) => {
  return (
    <S.Container>
      <Link
        to="/checkout"
        className="card-button"
        onClick={() => {
          addVoteTo(candidate);
        }}
      >
        Vote
      </Link>
    </S.Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addVoteTo: candidate => dispatch(addVoteTo(candidate))
});

export default connect(
  null,
  mapDispatchToProps
)(VoteButton);
