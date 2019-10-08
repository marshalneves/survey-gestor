import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <h1>Welcome to Robot Voting</h1>
            <Link to="/vote">Click to Vote!</Link>
        </>
    );
}

export default HomePage;