import React from 'react';
import { Link } from 'react-router-dom';

import SummaryPage from '../summary/summary.component';

import './homepage.styles.css';

const HomePage = () => {
    return (
        <>
            <h1>Welcome to Robot Voting</h1>
            <div className='homepage-container'>
                <div>
                    <SummaryPage />
                </div>
                <div>
                    <Link to="/vote" className='button'>Click to Vote!</Link>
                </div>

            </div>
        </>
    );
}

export default HomePage;