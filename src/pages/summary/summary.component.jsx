import React from 'react';
import { connect } from "react-redux";

import './summary.styles.css';

function compare(a, b) {
    const objA = a.votes;
    const objB = b.votes;

    let comparison = 0;
    if (objA > objB) {
        comparison = -1;
    } else if (objA < objB) {
        comparison = 1;
    }
    return comparison;
}

const SummaryPage = ({ votesCount, candidates }) => {
    return (
        <div>
            {/* <h1>Summary Page</h1> */}
            <div className='container-summary'>
                <h3>Ranking</h3>
                {
                    candidates.sort(compare).map((c, i) => {
                        return (<p>{++i}º {c.name}: {c.votes} vote(s)</p>)
                    })
                }
                <p><b>Votes Count:</b> {votesCount}</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    candidates: state.reducer.candidates,
    votesCount: state.reducer.votesCount
});

export default connect(mapStateToProps)(SummaryPage);