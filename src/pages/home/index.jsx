import React from "react";
import { connect } from 'react-redux';
import PageHeader from "../../components/PageHeader";
import Summary from "../summary";

import * as S from "./styles";

const Home = ({ elections }) => {
  return (
    <div>
      <PageHeader title="Elections" />
      <S.Container>
        {
          elections.map(election => (
            <>
              <Summary key={election.id} election={election} />
            </>
          ))};
      </S.Container>
    </div>
  );
};

const mapStateToProps = state => ({
  elections: state.reducer.elections,
});

export default connect(mapStateToProps)(Home);
