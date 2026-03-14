import React from 'react';
import Hero from '../components/landing/Hero';
import Values from '../components/landing/Values';
import Categories from '../components/landing/Categories';
import FeaturedProducts from '../components/landing/FeaturedProducts';

const Landing = () => {
    return (
        <div className="flex flex-col gap-12 pb-24">
            <Hero />
            <Values />
            <Categories />
            <FeaturedProducts />
            
            {/* CTA Section */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto rounded-[3rem] bg-slate-900 overflow-hidden relative p-12 lg:p-24 text-center">
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Prêt à soutenir nos agriculteurs ?</h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                            Rejoignez la révolution alimentaire en Algérie. Des produits frais, 
                            traceables et justes pour tous.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-5 rounded-2xl bg-dz-green text-white font-bold text-lg hover:bg-dz-green-dark transition-all transform hover:-translate-y-1">
                                Commencer mes achats
                            </button>
                            <button className="px-10 py-5 rounded-2xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                Devenir Vendeur
                            </button>
                        </div>
                    </div>
                    
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dz-green/20 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-dz-olive/20 blur-[100px] rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
