import React from "react";

const Header = props => {
  return (
    <>
      <h1>Last vote: {props.lastVoted} </h1>
      <h3>Total votes: {props.totalVotes} </h3>
      <button
        onClick={() => {
          alert("deslogar");
        }}
      >
        Deslogar
      </button>
    </>
  );
};

export default Header;
