import React from 'react';
import { motion } from 'framer-motion';

const values = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "100% Local",
        color: "bg-dz-green/10 text-dz-green",
        desc: "Soutenez directement les paysans algériens et l'économie locale."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Garanti Pur",
        color: "bg-dz-olive/10 text-dz-olive",
        desc: "Qualité contrôlée et produits biologiques sans produits chimiques nocifs."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Livraison Rapide",
        color: "bg-orange-500/10 text-orange-500",
        desc: "Du champ à votre domicile à Alger et environs en moins de 24h."
    }
];

const Values = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Pourquoi nous choisir ?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Nous nous engageons à offrir une expérience d'achat transparente et éthique pour tous les Algériens.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {values.map((v, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white border border-slate-50 hover:border-dz-green/10 transition-all hover:shadow-xl group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-12`}>
                                {v.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-dz-green transition-colors">{v.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-dz-green/5 blur-3xl -z-10 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-dz-olive/5 blur-3xl -z-10 rounded-full"></div>
        </section>
    );
};

export default Values;
