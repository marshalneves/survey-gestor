import React from "react";
import { connect } from 'react-redux';
import PageHeader from "../../components/PageHeader";
import Summary from "../summary";

import * as S from "./styles";

const Home = ({ elections }) => {
  return (
    <div>
      <PageHeader title="Surveys" />
      <S.Container>
        {
          elections.map(election => (
            <div>
              <Summary key={election.id} election={election} />
            </div>
          ))};
      </S.Container>
    </div>
  );
};

const mapStateToProps = state => ({
  elections: state.reducer.elections,
});

export default connect(mapStateToProps)(Home);
