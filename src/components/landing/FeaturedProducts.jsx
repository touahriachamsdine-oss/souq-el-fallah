import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Huile d'Olive de Kabylie",
        price: "1,200 DA",
        farmer: "Brahim A.",
        rating: 4.9,
        image: "/images/olive_oil.png",
        badge: "Bio"
    },
    {
        id: 2,
        name: "Dattes Deglet Nour",
        price: "800 DA",
        farmer: "Yassine H.",
        rating: 5.0,
        image: "/images/dates.png",
        badge: "Premium"
    },
    {
        id: 3,
        name: "Miel Pur des Aurès",
        price: "2,500 DA",
        farmer: "Lakhdar M.",
        rating: 4.8,
        image: "/images/honey.png",
        badge: "Artisanal"
    }
];

const FeaturedProducts = () => {
    return (
        <section className="py-24 px-6 bg-slate-50/50 backdrop-blur-sm -mx-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-0">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Le Marché en Direct</h2>
                        <p className="text-slate-500 text-lg">Découvrez les pépites de notre terroir, fraîchement récoltées.</p>
                    </div>
                    <Link to="/marketplace" className="text-dz-green font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Voir tout le marché
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-6 md:px-0">
                    {products.map((p, i) => (
                        <motion.div 
                            key={p.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src={p.image} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt={p.name} 
                                />
                                <div className="absolute top-4 left-4 py-1 px-4 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                                    {p.badge}
                                </div>
                                <button className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex text-yellow-400 text-sm">
                                        {"★".repeat(5)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{p.rating}</span>
                                </div>
                                <Link to="/marketplace">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-dz-green transition-colors">{p.name}</h3>
                                </Link>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-black text-dz-green">{p.price}</div>
                                        <div className="text-sm text-slate-400 font-medium">de {p.farmer}</div>
                                    </div>
                                    <button className="p-4 rounded-2xl bg-slate-900 text-white hover:bg-dz-green transition-all transform hover:scale-110">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
