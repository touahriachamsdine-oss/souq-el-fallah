import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Plus, Check, ShoppingCart, Heart, TrendingUp } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { lang, t, addToCart } = useApp();
    const [added, setAdded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div 
            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100 dark:hover:shadow-none hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badges */}
            <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                {product.isFresh && (
                    <span className="bg-emerald-500/90 text-white text-[10px] font-black px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-lg shadow-emerald-200/50">
                        {t('common.fresh')}
                    </span>
                )}
                {product.isTrending && (
                    <span className="bg-amber-500/90 text-white text-[10px] font-black px-3 py-1.5 rounded-full backdrop-blur-md uppercase tracking-widest shadow-lg shadow-amber-200/50 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                    </span>
                )}
            </div>

            <button className="absolute top-6 right-6 z-10 p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-100 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-rose-500 hover:scale-110 active:scale-90 transition-all shadow-sm">
                <Heart className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-50 dark:bg-slate-800/50">
                <img 
                    src={product.image} 
                    alt={product.name[lang]} 
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Quick Add Overlay */}
                <div className={`absolute inset-0 bg-emerald-950/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                        onClick={handleAddToCart}
                        className="bg-white text-emerald-600 px-6 py-3 rounded-2xl font-black text-sm shadow-xl hover:bg-emerald-50 transition-all flex items-center gap-2"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        {t('common.quickAdd')}
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="mt-6 px-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest p-1 px-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                        {product.category}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white line-clamp-1 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.name[lang]}
                </h3>
                
                <div className="flex items-center justify-between mt-6">
                    <div>
                        <span className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                            {product.price}
                        </span>
                        <span className="text-xs font-bold text-slate-400 ml-1">
                            DA / {product.unit}
                        </span>
                    </div>

                    <button 
                        onClick={handleAddToCart}
                        disabled={added}
                        className={`
                            p-3 rounded-2xl shadow-lg transition-all transform active:scale-95
                            ${added 
                                ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default scale-110' 
                                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 dark:shadow-none hover:scale-110'
                            }
                        `}
                    >
                        {added ? <Check className="w-5 h-5 font-black" /> : <Plus className="w-5 h-5 font-black" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
