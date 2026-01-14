import React, { createContext, useContext, useState, useMemo } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [lang, setLang] = useState('fr'); // Default to French
    const [user, setUser] = useState(null); // Current user
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: { en: 'Organic Honey', fr: 'Miel Bio de Montagne', ar: 'عسل جبلي طبيعي' },
            price: 2500,
            category: 'honey',
            farmerId: 101,
            farmName: 'Beni Slimane Farm',
            wilaya: '25',
            baladiya: 'Constantine',
            image: 'https://images.unsplash.com/photo-1587049633562-ad36026d0210?auto=format&fit=crop&q=80&w=400',
            rating: 4.8,
            reviews: [
                { user: 'Ahmed', rating: 5, comment: 'Excellent quality! Tastes pure.' }
            ],
            stock: 50
        },
        {
            id: 2,
            name: { en: 'Extra Virgin Olive Oil', fr: 'Huile d\'Olive Vierge Extra', ar: 'زيت زيتون بكر ممتاز' },
            price: 1200,
            category: 'other',
            farmerId: 102,
            farmName: 'Djurdjura Harvest',
            wilaya: '15',
            baladiya: 'Tizi Ouzou',
            image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400',
            rating: 4.9,
            reviews: [],
            stock: 100
        },
        {
            id: 3,
            name: { en: 'Traditional Sheep Cheese', fr: 'Fromage de Brebis Traditionnel', ar: 'جبن غنم تقليدي' },
            price: 1800,
            category: 'dairy',
            farmerId: 101,
            farmName: 'Aurès Dairy',
            wilaya: '05',
            baladiya: 'Batna',
            image: 'https://images.unsplash.com/photo-1486297678162-ad2a19b85f30?auto=format&fit=crop&q=80&w=400',
            rating: 4.7,
            reviews: [],
            stock: 30
        },
        {
            id: 4,
            name: { en: 'Deglet Nour Dates', fr: 'Dattes Deglet Nour', ar: 'تمور دقلة نور' },
            price: 850,
            category: 'fruits',
            farmerId: 103,
            farmName: 'Tolga Palms',
            wilaya: '07',
            baladiya: 'Biskra',
            image: 'https://images.unsplash.com/photo-1596735759715-998f45a08332?q=80&w=400&auto=format&fit=crop',
            rating: 5.0,
            reviews: [],
            stock: 500
        },
        {
            id: 5,
            name: { en: 'Organic Tomatoes', fr: 'Tomates Bio', ar: 'طماطم عضوية' },
            price: 120,
            category: 'vegetables',
            farmerId: 104,
            farmName: 'Mitidja Greenhouses',
            wilaya: '09',
            baladiya: 'Blida',
            image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=400&auto=format&fit=crop',
            rating: 4.5,
            reviews: [],
            stock: 200
        },
        {
            id: 6,
            name: { en: 'Fresh Free-Range Eggs', fr: 'Œufs Fermiers Frais', ar: 'بيض بلدي طازج' },
            price: 550,
            category: 'dairy',
            farmerId: 105,
            farmName: 'Setif Poultry',
            wilaya: '19',
            baladiya: 'Setif',
            image: 'https://plus.unsplash.com/premium_photo-1668618991404-54c23940c6a5?q=80&w=400&auto=format&fit=crop',
            rating: 4.6,
            reviews: [],
            stock: 60
        },
        {
            id: 7,
            name: { en: 'Premium Wheat Flour', fr: 'Farine de Blé Premium', ar: 'دقيق قمح ممتاز' },
            price: 90,
            category: 'grains',
            farmerId: 106,
            farmName: 'Tiaret Golden Fields',
            wilaya: '14',
            baladiya: 'Tiaret',
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop',
            rating: 4.8,
            reviews: [],
            stock: 1000
        },
        {
            id: 8,
            name: { en: 'Fresh Lamb Meat', fr: 'Viande d\'Agneau Fraîche', ar: 'لحم خروف طازج' },
            price: 2400,
            category: 'meat',
            farmerId: 107,
            farmName: 'Djelfa Steppe Farm',
            wilaya: '17',
            baladiya: 'Djelfa',
            image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=400&auto=format&fit=crop',
            rating: 4.9,
            reviews: [],
            stock: 20
        }
    ]);

    const t = useMemo(() => {
        return (key) => {
            const keys = key.split('.');
            let result = translations[lang];
            for (const k of keys) {
                if (!result) return key;
                result = result[k];
            }
            return result || key;
        };
    }, [lang]);

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
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
