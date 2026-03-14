import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('souq_user');
        try {
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('souq_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('souq_user');
        }
    }, [user]);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    const value = useMemo(() => ({
        user,
        isAuthenticated: !!user,
        login,
        logout
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
