import React, { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    // Otimização: Tentar ler do localStorage logo na inicialização do state
    // Isso evita um "flash" de utilizador deslogado enquanto o useEffect não roda
    const [userInfo, setUserInfo] = useState(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:userData');
        return userInfoLocalStorage ? JSON.parse(userInfoLocalStorage) : {};
    });

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userData');
        // Opcional: localStorage.removeItem('devburger:cartData'); se quiser limpar o carrinho no logout
    };

    // Mantemos o useEffect para sincronização, caso necessário em outras abas
    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:userData');
        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

// Boa prática: Adicionar prop-types para o children
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};