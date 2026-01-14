import React from 'react';
import { useApp } from '../context/AppContext';
import { Star, MapPin, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { lang, t, setCart } = useApp();

    const handleAddToCart = (e) => {
        e.preventDefault();
        setCart(prev => [...prev, product]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card overflow-hidden group relative flex flex-col h-full"
        >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-56 sm:h-64">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-slate-800 shadow-sm uppercase tracking-wider border border-white/50">
                        {product.category}
                    </span>
                    {product.stock < 10 && (
                        <span className="bg-dz-red/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm animate-pulse">
                            {lang === 'ar' ? 'كمية محدودة' : 'Low Stock'}
                        </span>
                    )}
                </div>
            </Link>

            <div className="p-5 flex flex-col flex-grow space-y-3 relative z-20 bg-white/50 backdrop-blur-md">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${product.id}`} className="hover:text-dz-green transition-colors">
                        <h3 className="text-lg font-black text-slate-800 line-clamp-1 leading-tight">{product.name[lang]}</h3>
                    </Link>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse bg-yellow-400/20 px-2 py-0.5 rounded-lg border border-yellow-400/30">
                        <Star size={14} className="text-yellow-600 fill-yellow-600" />
                        <span className="text-xs font-bold text-yellow-800">{product.rating}</span>
                    </div>
                </div>

                <div className="flex items-center text-slate-500 text-sm space-x-1.5 rtl:space-x-reverse">
                    <MapPin size={14} className="text-dz-green flex-shrink-0" />
                    <span className="line-clamp-1 font-medium text-slate-600">{product.farmName}, {product.baladiya}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-bold uppercase">{t('common.price') || 'Price'}</span>
                        <div className="flex items-baseline space-x-1 rtl:space-x-reverse">
                            <span className="text-2xl font-black text-dz-green">{product.price.toLocaleString()}</span>
                            <span className="text-xs font-bold text-slate-400">DZD</span>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="p-3 bg-slate-900 text-white rounded-xl hover:bg-dz-green hover:shadow-lg hover:shadow-dz-green/30 transition-all active:scale-95 group/btn"
                        title={t('market.addToCart')}
                    >
                        <ShoppingCart size={20} className="group-active/btn:scale-90 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
