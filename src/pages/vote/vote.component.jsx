import React from 'react';
import CardList from "../../components/card-list/card-list.component";
import { connect } from "react-redux";

const VotePage = ({ candidates }) => {
    return (
        <>
            <h1>Make your vote!</h1>
            <CardList />
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