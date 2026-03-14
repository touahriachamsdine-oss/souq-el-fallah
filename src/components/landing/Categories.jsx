import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
    {
        name: "Légumes",
        count: "120+ produits",
        image: "https://images.unsplash.com/photo-1566385101042-1a00a8326c5b?q=80&w=2000&auto=format&fit=crop",
        color: "bg-dz-green"
    },
    {
        name: "Fruits",
        count: "85+ produits",
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2000&auto=format&fit=crop",
        color: "bg-amber-500"
    },
    {
        name: "Dattes & Fruits Secs",
        count: "45+ produits",
        image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=2000&auto=format&fit=crop",
        color: "bg-dz-olive"
    },
    {
        name: "Huiles d'Olive",
        count: "30+ produits",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2000&auto=format&fit=crop",
        color: "bg-lime-600"
    },
    {
        name: "Miel & Produits Bio",
        count: "60+ produits",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
        color: "bg-yellow-600"
    },
    {
        name: "Artisanat",
        count: "200+ produits",
        image: "https://images.unsplash.com/photo-1591123720164-de1348028a82?q=80&w=2000&auto=format&fit=crop",
        color: "bg-orange-700"
    }
];

const Categories = () => {
    return (
        <section className="px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Catégories Populaires</h2>
                        <p className="text-slate-500 max-w-lg">Explorez la diversité de l'agriculture Algérienne à travers nos sélections soigneusement choisies.</p>
                    </div>
                    <Link to="/marketplace" className="text-dz-green font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                        Voir tout le catalogue
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link 
                                to={`/marketplace?category=${cat.name.toLowerCase()}`}
                                className="group relative block h-[300px] rounded-[2rem] overflow-hidden bg-slate-100"
                            >
                                <img 
                                    src={cat.image} 
                                    alt={cat.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-300"></div>
                                
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                                    <p className="text-white/70 text-sm mb-4">{cat.count}</p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        Parcourir
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
