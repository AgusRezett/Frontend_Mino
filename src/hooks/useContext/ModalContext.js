import React, { useState } from 'react';

export const modalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState("language");

    return (
        <modalContext.Provider value={{ modalType: modalType, setModalType: (action) => setModalType(action) }}>
            {children}
        </modalContext.Provider>
    );
}
