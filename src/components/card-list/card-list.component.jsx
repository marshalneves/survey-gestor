import React from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ candidates }) => {

    return (
        <div className='container'>
            {
                candidates.map(candidate => (
                    <Card key={candidate.id} candidate={candidate} />
                ))
            }
        </div>
    );
};

export default CardList;