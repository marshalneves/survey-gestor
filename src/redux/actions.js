import typesReducer from "./types";

export const addVoteTo = candidateId => ({
  type: typesReducer.ADD_VOTE,
  payload: candidateId
});

export const getFirst = () => ({
  type: typesReducer.GET_FIRST
});
