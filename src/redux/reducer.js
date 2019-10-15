import types from "./types";
import APP_DATA from "./data";

const INITIAL_STATE = {
  elections: APP_DATA,
};

const addVoteTo = (elections, payload) => {
  return elections.map(election => {
    if (election.id === payload.electionId) {
      elections.candidates.map(candidate => {
        return (candidate.id === payload.candidateId) ?
          { ...elections, candidates: [{ ...elections.candidates }, { ...candidate, votes: candidate.votes + 1 }] }
          :
          { ...elections }
      });
    }
  });
}

// const getFirstCandidate = candidates => {
//   const temp = [...candidates];

//   let votesArray = temp.map(a => a.votes);
//   var maxVotes = votesArray.reduce(function (a, b) {
//     return Math.max(a, b);
//   });
//   const f = temp.filter(a => a.votes === maxVotes);
//   return f[0].name;
// };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_VOTE:
      const elections = addVoteTo(state.elections, action.payload);
      return {
        ...state,
        elections,

      };

    default:
      return state;
  }
};

export default reducer;
