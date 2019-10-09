import React from 'react';
import { connect } from "react-redux";
import { addVoteTo } from "../../redux/actions"
import { Link } from 'react-router-dom';

const VoteButton = ({ candidate }) => {
    return (
        <>
            <Link
                to="/checkout"
                className='card-button'
                onClick={() => {
                    addVoteTo(candidate);
                }}
            >{candidate.name}
            </Link >
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    addVoteTo: candidate => dispatch(addVoteTo(candidate))
});

export default connect(
    null,
    mapDispatchToProps
)(VoteButton);
