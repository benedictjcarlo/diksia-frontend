import { createContext, useState } from 'react';

const MetodePembayaranContext = createContext();

const MetodePembayaranProvider = ({ children }) => {
    const [metodePembayaran, setMetodePembayaran] = useState('');

    return (
        <MetodePembayaranContext.Provider value={{ metodePembayaran, setMetodePembayaran }}>
            {children}
        </MetodePembayaranContext.Provider>
    );
};

export { MetodePembayaranProvider, MetodePembayaranContext };