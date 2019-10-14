import types from "./types";
import APP_DATA from "./candidates.data";

const INITIAL_STATE = {
  candidates: APP_DATA.candidates,
  votesCount: 0,
  lastVote: null,
  first: null
};

const addVoteTo = (candidates, candidateId) => {
  return candidates.map(candidate => {
    return candidate.id === candidateId
      ? { ...candidate, votes: candidate.votes + 1 }
      : candidate;
  });
};

const getFirstCandidate = candidates => {
  const temp = [...candidates];

  let votesArray = temp.map(a => a.votes);
  var maxVotes = votesArray.reduce(function(a, b) {
    return Math.max(a, b);
  });
  const f = temp.filter(a => a.votes === maxVotes);
  return f[0].name;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_VOTE:
      const candidates = addVoteTo(state.candidates, action.payload);
      const first = getFirstCandidate(candidates);
      return {
        ...state,
        candidates,
        votesCount: ++state.votesCount,
        lastVote: action.payload.name,
        first
      };
    case types.GET_FIRST:
      return {
        ...state,
        first: "teste" //getFirstCandidate(state.candidates)
      };
    default:
      return state;
  }
};

export default reducer;
