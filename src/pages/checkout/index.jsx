import React from 'react'
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import './styles.css';

const Checkout = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => (
            setRedirect(true)
        ), 2000)
    }, [])

    return (
        <div className='message'>
            <h2>Thanks for your vote! Wait few seconds...</h2>
            <h3></h3>
            {
                redirect && <Redirect to='/' />
            }
        </div>
    )
}

export default Checkout;