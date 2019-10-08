import React from 'react'
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'

import './checkout.styles.css';

const CheckoutPage = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => (
            setRedirect(true)
        ), 2000)
    }, [])

    return (
        <>
            <h1 className='message'>Thanks for your vote!</h1>
            {
                redirect && <Redirect to='/' />
            }
        </>
    )
}

export default CheckoutPage;