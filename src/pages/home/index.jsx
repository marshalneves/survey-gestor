import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Summary from "../summary";

import * as S from "./styles";

const Home = () => {
  return (
    <div>
      <PageHeader title="Ranking" />
      <S.Container>
        <Summary />
        <Link to="/vote">Click to Vote</Link>
      </S.Container>
    </div>
  );
};

export default Home;
