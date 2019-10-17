import typesReducer from "./types";

export const addVoteTo = (electionId, candidateId) => ({
  type: typesReducer.ADD_VOTE,
  payload: { electionId, candidateId }
});

export const getCandidates = () => ({
  type: typesReducer.GET_CANDIDATES
});

export const resetState = () => ({
  type: typesReducer.RESET_STATE
})
