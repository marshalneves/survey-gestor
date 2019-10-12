import React from "react";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import * as S from "./styles";

const Checkout = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 2000);
  }, []);

  return (
    <S.Container>
      <h2>Thanks for your vote! Wait few seconds...</h2>
      {redirect && <Redirect to="/" />}
    </S.Container>
  );
};

export default Checkout;
