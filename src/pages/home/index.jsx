import React from 'react';
import { Link } from 'react-router-dom';

import Summary from '../summary'

import './styles.css';

const Home = () => {
    return (
        <>
            <div className='homepage-container'>
                <div>
                    <Summary />
                </div>
                <div>
                    <Link to="/vote" className='button'>Click to Vote!</Link>
                </div>

            </div>
        </>
    );
}

export default Home;