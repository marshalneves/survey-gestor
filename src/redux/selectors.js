import { createSelector } from 'reselect';

const selectElection = state => state.elections;

export const selectElectionCandidates = createSelector(
    [selectElection],
    election => election.candidates
);

export const selectElectionVotesCount = createSelector(
    [selectElectionCandidates],
    candidates => candidates.reduce((accumalatedVotes, candidate) => accumalatedVotes + candidate.totalVotes, 0)
);