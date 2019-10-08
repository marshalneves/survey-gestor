import React from 'react';
import Vote from "../../components/vote/vote-component";
import { connect } from "react-redux";

const VotePage = ({ candidates }) => {
    return (
        <>
            {JSON.stringify(candidates)}
            <h1>Make your vote!</h1>
            <Vote />
        </>
    );
}

const mapStateToProps = state => ({
    candidates: state.reducer.candidates,
});

export default connect(
    mapStateToProps,
    null
)(VotePage);