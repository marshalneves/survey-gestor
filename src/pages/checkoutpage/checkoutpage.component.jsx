import React from 'react'
import { connect } from "react-redux";

const CheckoutPage = ({ candidates }) => {

    return (
        <>
            {JSON.stringify(candidates)}
            <h1>Thanks for your vote!</h1>
        </>
    )
}


const mapStateToProps = state => ({
    candidates: state.reducer.candidates,
});

export default connect(
    mapStateToProps,
    null
)(CheckoutPage);