import React from 'react';

import VoteButton from '../VoteButton';

const Card = ({ candidate }) => {
    return (
        <div className='card' key={candidate.id}>
            <div><img src={`https://robohash.org/${candidate.id}?set=set2&size=180x180`} /></div>
            <div className='card-name'>{candidate.name}</div>
            <div className='card-votes'>{candidate.votes}</div>
            <VoteButton candidate={candidate} />
        </div>
    );
}

export default Card;