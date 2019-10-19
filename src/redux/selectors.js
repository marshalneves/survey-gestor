import { createSelector } from 'reselect';

const selectElections = state => state.elections

export const selectElection = id => createSelector(
    [selectElections],
    elections =>  elections.filter(e => e.id === parseInt(id))[0] //elections.map(election => election.id === parseInt(id) ? {...election} : null)
);

export const selectCandidates = id => createSelector(
    [selectElection(id)],
    election => {console.log(election); return election.candidates}
);

export const selectVotesCount = id => createSelector(
    [selectCandidates(id)],
    candidates => candidates.reduce((accumalatedVotes, candidate) => accumalatedVotes + candidate.votes, 0)
);