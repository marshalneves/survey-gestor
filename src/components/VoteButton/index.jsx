import React from 'react';
import { connect } from "react-redux";
import { addVoteTo } from "../../redux/actions"
import { Link } from 'react-router-dom';

const VoteButton = ({ candidate, addVoteTo }) => {

    return (
        <div>
            <Link
                to="/checkout"
                className='card-button'
                onClick={() => {
                    addVoteTo(candidate);
                }}
            >Vote
            </Link >
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addVoteTo: candidate => dispatch(addVoteTo(candidate))
});

export default connect(
    null,
    mapDispatchToProps
)(VoteButton);
