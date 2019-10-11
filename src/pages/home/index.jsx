import React from 'react';
import { Link } from 'react-router-dom';

import Summary from '../summary'

import './styles.css';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='summary'>
                    <Summary />
                </div>
                <div className='box-button'>
                    <Link to="/vote" className='button'>Click to Vote!</Link>
                </div>

            </div>
        </>
    );
}

export default Home;