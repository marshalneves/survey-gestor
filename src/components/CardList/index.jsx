import React from 'react';

import Card from '../Card';
import './styles.css';

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