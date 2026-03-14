import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on initial mount
    useEffect(() => {
        const saved = localStorage.getItem('souq_cart');
        try {
            if (saved) {
                setCart(JSON.parse(saved));
            }
        } catch (e) {
            console.error('Error parsing cart from localStorage', e);
            setCart([]);
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('souq_cart', JSON.stringify(cart));
    }, [cart]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Effect to handle body scroll locking when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to reset overflow when component unmounts or isCartOpen changes
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const cartTotal = useMemo(() => 
        cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    [cart]);

    const cartCount = useMemo(() => 
        cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]);

    // The context value should be memoized to prevent unnecessary re-renders of consumers
    // unless the dependencies actually change.
    const value = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen
    }), [cart, cartTotal, cartCount, isCartOpen, setIsCartOpen]); // Added setIsCartOpen to dependencies

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
