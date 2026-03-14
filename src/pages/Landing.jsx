import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Landing = () => {
    const { t } = useApp();

    return (
        <div className="flex flex-col gap-24 overflow-hidden">
            {/* Hero Section */}
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
                        <p className="text-xl text-slate-600 mb-10 max-w-lg">
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
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="text-slate-900 font-bold">2,400+ Clients</div>
                                <div className="text-sm text-slate-500 font-medium">Satisfaits par nos produits locaux</div>
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
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1 transform group transition-transform hover:skew-y-0 duration-700">
                            <img 
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200" 
                                alt="Agriculteur Algérien" 
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        
                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-dz-green/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-dz-olive/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        
                        <div className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-3xl bg-white shadow-2xl z-20 max-w-xs border border-slate-50">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 rounded-2xl bg-dz-green/10 text-dz-green">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="font-bold text-slate-900 leading-tight">Authenticité Certifiée</div>
                            </div>
                            <p className="text-xs text-slate-500">Chaque produit est tracé de l'agriculteur jusqu'à votre panier grâce à notre technologie de blockchain.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Nos Engagements</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Nous redéfinissons le commerce agricole en Algérie en mettant l'accent sur la transparence et l'équité.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🌿',
                                title: 'Direct Producteur',
                                desc: 'Supprimez les intermédiaires et soutenez directement les familles d\'agriculteurs algériens.',
                                color: 'dz-green'
                            },
                            {
                                icon: '✨',
                                title: 'Fraîcheur Maximale',
                                desc: 'Récolté le matin, emballé avec soin et livré rapidement pour préserver toutes les saveurs.',
                                color: 'dz-olive'
                            },
                            {
                                icon: '🤝',
                                title: 'Commerce Équitable',
                                desc: 'Nous garantissons un prix juste pour le producteur et un prix compétitif pour le consommateur.',
                                color: 'dz-earth'
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-dz-green/30 transition-all"
                            >
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-dz-green transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dz-green/5 rounded-full blur-[120px] -z-10"></div>
            </section>

            {/* Featured Marketplace Teaser */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Le Marché du Moment</h2>
                        <p className="text-slate-500">Les produits les plus frais récoltés cette semaine.</p>
                    </div>
                    <Link to="/marketplace" className="text-dz-green font-bold flex items-center gap-2 group">
                        Voir tout le marché
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: 'Huile d\'Olive Kabyle', price: '1200 DA', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbadb8c5?q=80&w=400', producer: 'Ferme Ait Mansour', rating: 4.9 },
                        { name: 'Dattes Deglet Nour', price: '850 DA', img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=400', producer: 'Oasis Biskra', rating: 4.8 },
                        { name: 'Miel de Thym Sauvage', price: '2500 DA', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400', producer: 'Rucher des Aurès', rating: 5.0 },
                        { name: 'Figues de Barbarie', price: '400 DA', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=400', producer: 'Domaine Mitidja', rating: 4.7 }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 group"
                        >
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                                    ⭐ {item.rating}
                                </div>
                            </div>
                            <div className="px-2">
                                <h4 className="font-bold text-slate-900 mb-1">{item.name}</h4>
                                <p className="text-xs text-slate-500 mb-3">{item.producer}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-dz-green">{item.price}</span>
                                    <button className="w-10 h-10 rounded-xl bg-dz-green/10 text-dz-green flex items-center justify-center hover:bg-dz-green hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="rounded-[3rem] bg-gradient-to-br from-dz-green to-dz-green-dark p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                            Prêt à goûter au terroir algérien ?
                        </h2>
                        <p className="text-dz-green-light/80 text-lg mb-12 max-w-xl mx-auto">
                            Rejoignez des milliers de foyers qui ont déjà choisi une alimentation plus saine et responsable.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/signup" className="px-10 py-5 bg-white text-dz-green font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-colors">
                                Créer mon compte gratuit
                            </Link>
                            <Link to="/producer/reg" className="px-10 py-5 bg-dz-green-dark/50 text-white font-bold rounded-2xl border border-white/20 hover:bg-dz-green-dark transition-colors">
                                Devenir exposant
                            </Link>
                        </div>
                    </div>
                    
                    {/* Abstract circles */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 border-[40px] border-white/10 rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[40px] border-white/5 rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
