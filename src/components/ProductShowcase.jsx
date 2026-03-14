import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingCart, Heart, Star, ChevronRight, Zap, QrCode } from 'lucide-react';

const ProductShowcase = () => {
    const { t } = useApp();
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = ['All', 'Vegetables', 'Fruits', 'Essentials', 'Organic'];

    const products = [
        {
            name: "Organic Honey",
            price: "1200 DA",
            category: "Essentials",
            img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1887&auto=format&fit=crop",
            tag: "Bestseller",
            rating: 5.0,
            traceId: "TR-HN-001"
        },
        {
            name: "Fresh Tomatoes",
            price: "150 DA/kg",
            category: "Vegetables",
            img: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1935&auto=format&fit=crop",
            tag: "Farm Fresh",
            rating: 4.8,
            traceId: "TR-TM-042"
        },
        {
            name: "Sweet Dates",
            price: "850 DA/kg",
            category: "Fruits",
            img: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1887&auto=format&fit=crop",
            tag: "Sahara Gold",
            rating: 4.9,
            traceId: "TR-DT-088"
        },
        {
            name: "Extra Virgin olive Oil",
            price: "1800 DA/L",
            category: "Essentials",
            img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1918&auto=format&fit=crop",
            tag: "Premium",
            rating: 4.7,
            traceId: "TR-OL-009"
        }
    ];

    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                            Explore Our <span className="text-emerald-600">Premium</span> Selections
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                            The finest quality produce hand-picked from local Algerian farms, delivered fresh to your market basket.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-[2rem] border border-slate-100 dark:border-slate-700">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(idx)}
                                className={`px-6 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${activeCategory === idx ? 'bg-white dark:bg-slate-800 text-emerald-600 shadow-xl shadow-slate-200 dark:shadow-none translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-emerald-500/20 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                            {/* Product Image */}
                            <div className="relative aspect-[4/5] overflow-hidden m-4 rounded-[2.5rem]">
                                <img 
                                    src={product.img} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <span className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest text-emerald-600 shadow-xl w-fit">
                                        {product.tag}
                                    </span>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald-600/90 backdrop-blur-md rounded-2xl text-[9px] font-black text-white shadow-xl w-fit opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                        <QrCode className="w-3 h-3" />
                                        TRACEABLE
                                    </div>
                                </div>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors shadow-xl">
                                    <Heart className="w-5 h-5" />
                                </button>
                                
                                {/* Overlay add to cart */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl flex items-center gap-3 transition-colors shadow-2xl">
                                        <ShoppingCart className="w-5 h-5" />
                                        Fast Add
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-8 pt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-amber-500">
                                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <span className="text-xs font-black text-slate-400">({product.rating})</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-tighter">
                                        {product.traceId}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                                    {product.name}
                                </h3>
                                
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-black text-emerald-600">
                                        {product.price}
                                    </p>
                                    <div className="group/details relative">
                                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-pointer">
                                            <ChevronRight className="w-6 h-6" />
                                        </div>
                                        {/* Hover Tooltip for Traceability */}
                                        <div className="absolute bottom-full right-0 mb-4 w-32 opacity-0 group-hover/details:opacity-100 transition-opacity pointer-events-none">
                                            <div className="bg-slate-900 text-white text-[10px] font-black p-3 rounded-2xl shadow-2xl relative">
                                                Trace Origin
                                                <div className="absolute top-full right-4 border-8 border-transparent border-t-slate-900"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery badge */}
                            <div className="absolute bottom-24 right-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black rounded-xl border border-amber-100 dark:border-amber-400/20">
                                    <Zap className="w-3 h-3 fill-current" />
                                    EXPRESS
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center">
                    <button className="inline-flex items-center gap-3 font-black text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group">
                        Browse Full Market Collection
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    <div className="mt-6 w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

// Helper internal component to avoid missing import
const ArrowRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default ProductShowcase;
