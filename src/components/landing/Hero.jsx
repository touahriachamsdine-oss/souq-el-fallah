import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative px-6 pt-12 lg:pt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dz-green/10 text-dz-green text-sm font-semibold mb-6 border border-dz-green/20">
                        <span className="flex h-2 w-2 rounded-full bg-dz-green animate-pulse"></span>
                        100% de la ferme à votre table
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                        Le meilleur de <span className="text-dz-green">l'Algérie</span> livré chez vous
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                        Souq El Fallah connecte les agriculteurs algériens directement aux consommateurs. 
                        Frais, authentique et sans intermédiaire.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            to="/marketplace" 
                            className="px-8 py-4 rounded-2xl bg-dz-green text-white font-bold hover:bg-dz-green-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-dz-green/30"
                        >
                            Explorer le marché
                        </Link>
                        <Link 
                            to="/trust" 
                            className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold border-2 border-slate-100 hover:border-dz-green/30 transition-all transform hover:-translate-y-1"
                        >
                            Comment ça marche ?
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden transform hover:scale-110 transition-transform cursor-pointer">
                                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="text-slate-900 font-bold">2,400+ Clients</div>
                            <div className="text-sm text-slate-500 font-medium whitespace-nowrap">Satisfaits par nos produits locaux</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
                        <img 
                            src="/images/hero.png" 
                            alt="Agriculteur Algérien" 
                            className="w-full h-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Decorative blobs */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-dz-green/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-dz-olive/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-3xl bg-white shadow-2xl z-20 max-w-xs border border-slate-50"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 rounded-2xl bg-dz-green/10 text-dz-green">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="font-bold text-slate-900 leading-tight">Authenticité Certifiée</div>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">Chaque produit est tracé de l'agriculteur jusqu'à votre panier grâce à notre technologie de blockchain.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
