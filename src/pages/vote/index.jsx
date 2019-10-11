import React from 'react';
import CardList from "../../components/CardList";
import { connect } from "react-redux";

const Vote = ({ candidates }) => {
    return (
        <>
            <h1>Make your vote!</h1>
            <CardList candidates={candidates} />
        </>
    );
}

const mapStateToProps = state => ({
    candidates: state.reducer.candidates,
});

export default connect(
    mapStateToProps,
    null
)(Vote);