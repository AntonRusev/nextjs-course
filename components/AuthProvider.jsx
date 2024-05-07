'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

// Making a custom auth provider wrapper in order to not make the layot a client component
function AuthProvider({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;