import React, { useState } from "react";
import { connect } from 'react-redux';
import PageHeader from "../../components/PageHeader";
import Summary from "../summary";
import { resetState } from '../../redux/actions'
import { Redirect } from "react-router-dom";

import * as S from "./styles";

const Home = ({ elections, resetState }) => {
  const [reseted, setReseted] = useState(false);

  return (
    <div>
      <PageHeader title="Surveys" />
      <S.Container>
        {
          elections.map(election => (
            <div>
              <Summary key={election.id} election={election} />
            </div>
          ))}
        <button onClick={() => { resetState(); setReseted(true); alert('All surveys was reseted') }}>Reset</button>
        {reseted && <Redirect to="/" />}
      </S.Container>
    </div>
  );
};

const mapStateToProps = state => ({
  elections: state.reducer.elections,
});

const mapDispatchToProps = dispatch => ({
  resetState: () => {
    dispatch(resetState());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
