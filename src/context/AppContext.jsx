import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { translations } from './translations';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [lang, setLang] = useState('fr'); // Default to French
    const [user, setUser] = useState(null); // Current user
    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || 
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: {
                fr: "Pommes de Terre de Oued Souf",
                ar: "بطاطس وادي سوف",
                en: "Oued Souf Potatoes"
            },
            description: {
                fr: "Pommes de terre de qualité supérieure cultivées dans le désert.",
                ar: "بطاطس عالية الجودة مزروعة في الصحراء.",
                en: "Premium quality potatoes grown in the desert."
            },
            price: 75,
            unit: "kg",
            image: "https://images.unsplash.com/photo-1518977676601-b53f02bad673?w=500&auto=format",
            category: "Legumes",
            origin: "Oued Souf",
            farmName: "Ferme Sahraoui",
            wilaya: "El Oued",
            baladiya: "Oued Souf",
            farmerId: 101
        },
        {
            id: 2,
            name: {
                fr: "Dattes Deglet Nour",
                ar: "تمر دقلة نور",
                en: "Deglet Nour Dates"
            },
            description: {
                fr: "Les meilleures dattes du monde, miel naturel.",
                ar: "أفضل التمور في العالم، عسل طبيعي.",
                en: "The best dates in the world, natural honey."
            },
            price: 450,
            unit: "kg",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format",
            category: "Fruits",
            origin: "Biskra",
            farmName: "Coopérative El Nakhla",
            wilaya: "Biskra",
            baladiya: "Tolga",
            farmerId: 102
        },
        {
            id: 3,
            name: {
                fr: "Huile d'Olive Extra Vierge",
                ar: "زيت زيتون بكر ممتاز",
                en: "Extra Virgin Olive Oil"
            },
            description: {
                fr: "Pressée à froid, goût authentique de Kabylie.",
                ar: "معصور على البارد، طعم أصيل من منطقة القبائل.",
                en: "Cold pressed, authentic taste from Kabylie."
            },
            price: 900,
            unit: "L",
            image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format",
            category: "Epicerie",
            origin: "Béjaïa",
            farmName: "Moulins d'Afrique",
            wilaya: "Béjaïa",
            baladiya: "Akbou",
            farmerId: 103
        },
        {
            id: 4,
            name: {
                fr: "Tomates Fraîches",
                ar: "طماطم طازجة",
                en: "Fresh Tomatoes"
            },
            description: {
                fr: "Tomates charnues et juteuses.",
                ar: "طماطم لحمية وعصرية.",
                en: "Fleshy and juicy tomatoes."
            },
            price: 120,
            unit: "kg",
            image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format",
            category: "Legumes",
            origin: "Adrar",
            farmName: "Le Potager Bio",
            wilaya: "Adrar",
            baladiya: "Reggane",
            farmerId: 104
        },
        {
            id: 5,
            name: {
                fr: "Clémentines de la Mitidja",
                ar: "كلمنتين المتيجة",
                en: "Mitidja Clementines"
            },
            description: {
                fr: "Sucrées et faciles à éplucher.",
                ar: "حلوة وسهلة التقشير.",
                en: "Sweet and easy to peel."
            },
            price: 200,
            unit: "kg",
            image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format",
            category: "Fruits",
            origin: "Blida",
            farmName: "Vergers de la Mitidja",
            wilaya: "Blida",
            baladiya: "Boufarik",
            farmerId: 105
        }
    ]);

    const t = useMemo(() => (path) => {
        const keys = path.split('.');
        let result = translations[lang];
        for (const key of keys) {
            result = result?.[key];
        }
        return result || path;
    }, [lang]);

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return removeFromCart(productId);
        setCart(prev => prev.map(item => 
            item.id === productId ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    const value = {
        lang,
        setLang,
        t,
        user,
        setUser,
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        darkMode: isDarkMode,
        toggleDarkMode,
        isDarkMode,
        setIsDarkMode,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
