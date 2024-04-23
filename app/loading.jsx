"use client";

import React from 'react';
import { ClipLoader } from 'react-spinners';

// CSS override 
const override = {
    display: 'block',
    margin: '100px auto',
};

// Spinner/Loader component
function LoadingPage({ loading }) {
    return (
        <ClipLoader
            color='#3b82f6'
            loading={loading}
            size={150}
            cssOverride={override}
        />
    );
};

export default LoadingPage;