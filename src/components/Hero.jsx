import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Star, ShieldCheck, Zap, Play } from 'lucide-react';

const Hero = () => {
    const { t } = useApp();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,theme(colors.emerald.50/0.8),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,theme(colors.emerald.950/0.3),transparent_50%)]"></div>
            
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-widest mb-8 animate-fade-in shadow-xl shadow-emerald-100/20">
                            <Star className="w-3 h-3 fill-current" />
                            {t('hero.badge')}
                        </div>
                        
                        <h1 className="text-5xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                            {t('hero.title').split(' ').map((word, i) => (
                                <span key={i} className={word === 'Fallah' || word === 'Nature' ? 'bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            {t('hero.subtitle')}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <button className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-3xl shadow-2xl shadow-emerald-200 dark:shadow-none hover:shadow-emerald-400 dark:hover:shadow-none transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group text-lg">
                                {t('hero.cta')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            
                            <button className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-black text-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group px-6 py-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800">
                                <span className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 fill-current ml-1" />
                                </span>
                                How it works
                            </button>
                        </div>

                        {/* Stats/Trust markers */}
                        <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-80">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                </div>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Certified Organic</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    <Zap className="w-5 h-5 text-amber-500" />
                                </div>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">1h Flash Delivery</span>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 w-full animate-float">
                            <div className="absolute -inset-4 bg-emerald-500/20 blur-[80px] -z-10 rounded-full"></div>
                            <div className="relative bg-white dark:bg-slate-800 p-4 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-700">
                                <img 
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
                                    alt="Fresh Produce" 
                                    className="rounded-[3.2rem] w-full object-cover shadow-inner"
                                />
                                {/* Floating cards */}
                                <div className="absolute -left-12 bottom-12 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl animate-float-delayed border border-slate-50 dark:border-slate-800 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl">
                                            <Star className="w-6 h-6 text-emerald-600 fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Top Rated</p>
                                            <p className="text-lg font-black text-slate-800 dark:text-white">4.9/5 Stars</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -right-8 top-12 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl animate-bounce-slow border border-slate-50 dark:border-slate-800 hidden md:block">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex -space-x-3">
                                            {[1,2,3,4].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                                </div>
                                            ))}
                                            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-600 flex items-center justify-center text-[10px] font-black text-white">
                                                12k+
                                            </div>
                                        </div>
                                        <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
