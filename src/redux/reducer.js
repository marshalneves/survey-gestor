import types from "./types";
import APP_DATA from "./data";

const INITIAL_STATE = {
  elections: APP_DATA.elections,
};

const addVoteTo = (elections, payload) => {
  // schipperheyn

  let ind = elections.findIndex(election => election.id === payload.electionId);
  const election = elections[ind];

  election.votesCount = election.votesCount + 1;

  ind = election.candidates.findIndex((obj => obj.id === payload.candidateId));
  const candidate = election.candidates[ind];

  candidate.votes = candidate.votes + 1;

  return elections;

}

function totalVotes(election) {
  return election.candidates.reduce((total, candidate) => total + candidate.totalVotes, 0);
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case types.ADD_VOTE:
      return {
        ...state,
        elections: addVoteTo(state.elections, action.payload)

      };
    case types.RESET_STATE:
      state.elections.map(el => {
        el.votesCount = 0
        el.candidates.map(ca => {
          ca.votes = 0
        })
      })
      return {
        ...state,
      }

    default:
      return state;
  }
};

export default reducer;
