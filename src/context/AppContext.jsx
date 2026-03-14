import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations } from '../data/translations';
import { products as allProducts } from '../data/products';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Current Language (default: fr)
    const [lang, setLang] = useState(() => localStorage.getItem('souq_lang') || 'fr');
    
    // Theme (Light/Dark)
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('souq_theme') === 'dark');

    // Available Products (Source of Truth)
    const [products] = useState(allProducts);

    // Filter featured products
    const featuredProducts = useMemo(() => 
        products.filter(p => p.featured), 
    [products]);

    // Apply theme
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('souq_theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('souq_theme', 'light');
        }
    }, [darkMode]);

    // Language switcher
    const toggleLang = (l) => {
        setLang(l);
        localStorage.setItem('souq_lang', l);
    };

    // Translation helper
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    const value = useMemo(() => ({
        lang,
        setLang: toggleLang,
        t,
        darkMode,
        setDarkMode,
        products,
        featuredProducts
    }), [lang, darkMode, products, featuredProducts]);

    return (
        <AppContext.Provider value={value}>
            <div className={lang === 'ar' ? 'font-arabic' : 'font-outfit'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
