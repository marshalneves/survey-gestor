import typesReducer from "./types";

export const addVoteTo = candidate => ({
  type: typesReducer.ADD_VOTE,
  payload: candidate
});

export const getFirst = () => ({
  type: typesReducer.GET_FIRST
});
