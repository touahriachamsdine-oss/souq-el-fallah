import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-slate-900/50 transition-all group border border-slate-100 dark:border-slate-700"
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-700">
                <img
                    src={product.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.name}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600'; }}
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 py-1.5 px-4 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black text-slate-900 dark:text-white shadow-sm uppercase tracking-widest">
                    {product.badge || 'Local'}
                </div>
                {/* Wishlist */}
                <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-400 hover:text-red-500 transition-all shadow-sm transform hover:scale-110 active:scale-95">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Rating & Category */}
                <div className="flex items-center gap-1.5 mb-2">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-xs font-black text-slate-400 tabular-nums">{product.rating || '5.0'}</span>
                    <span className="text-slate-200 dark:text-slate-600 mx-1">•</span>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">{product.category || 'Terroir'}</span>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 group-hover:text-dz-green transition-colors line-clamp-1">
                    {product.name}
                </h3>

                {/* Price + Add to cart */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                            {product.price.toLocaleString()} <span className="text-dz-green">DA</span>
                        </div>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                            / {product.unit}
                        </div>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="h-12 w-12 rounded-2xl bg-slate-900 dark:bg-dz-green text-white hover:bg-dz-green dark:hover:bg-emerald-600 transition-all transform hover:rotate-6 flex items-center justify-center shadow-lg shadow-slate-900/10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
