import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { categories, wilayas } from '../data/algeria';
import { motion } from 'framer-motion';

const Marketplace = () => {
    const { products, t, lang } = useApp();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [filterWilaya, setFilterWilaya] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesSearch = p.name[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.farmName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
            const matchesWilaya = !filterWilaya || p.wilaya === filterWilaya;
            return matchesSearch && matchesCategory && matchesWilaya;
        });
    }, [products, searchTerm, activeCategory, filterWilaya, lang]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] rounded-[2.5rem] overflow-hidden dz-gradient flex items-center shadow-2xl transition-all duration-500 hover:shadow-dz-green/20 group">
                {/* Abstract Shapes */}
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] animate-float opacity-70"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[80px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>

                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

                <div className="relative z-10 w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-bold backdrop-blur-md border border-white/30 mb-4 shadow-lg text-sm uppercase tracking-wider">
                                {lang === 'ar' ? 'الأفضل في الجزائر' : lang === 'fr' ? 'Le Meilleur d\'Algérie' : 'Best of Algeria'}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-sm">
                                {lang === 'ar' ? 'من المزرعة' : lang === 'fr' ? 'De la ferme' : 'From Farm'}
                                <br />
                                <span className="text-yellow-300">
                                    {lang === 'ar' ? 'إلى مائدتك' : lang === 'fr' ? 'à votre table' : 'to Your Table'}
                                </span>
                            </h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/90 text-lg md:text-xl font-medium max-w-lg leading-relaxed"
                        >
                            {lang === 'ar' ? 'اكتشف أجود المنتجات الفلاحية الجزائرية، مباشرة من المنتجين المحليين.' :
                                lang === 'fr' ? 'Découvrez les meilleurs produits agricoles algériens, directement auprès des producteurs locaux.' :
                                    'Discover the finest Algerian agricultural products, directly from local producers.'}
                        </motion.p>
                    </div>
                    {/* Hero Image/Illustration possibility - kept clean for now or add floating element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:block relative"
                    >
                        {/* Placeholder for 3D element or illustration */}
                        <div className="relative z-10 glass-card p-6 rotate-3 hover:rotate-0 transition-all duration-500 float-right mr-10 shadow-2xl">
                            <div className="flex items-center space-x-4 mb-4 rtl:space-x-reverse">
                                <div className="w-12 h-12 bg-dz-green rounded-full flex items-center justify-center text-white">
                                    <img src="https://cdn-icons-png.flaticon.com/512/6065/6065078.png" className="w-8 h-8 invert" alt="Fresh" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">{t('market.featured') || 'Premium Quality'}</h3>
                                    <p className="text-xs text-slate-500">100% Organic & Fresh</p>
                                </div>
                            </div>
                            <div className="bg-slate-100/50 rounded-xl p-4 backdrop-blur-sm">
                                <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                                    <span>Verified Farmers</span>
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ 58 Wilayas</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Discovery & Filters */}
            <div className="sticky top-24 z-30 bg-slate-50/95 backdrop-blur-sm py-4 rounded-3xl transition-all">
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-[400px] group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-dz-green transition-colors">
                                <Search size={22} />
                            </div>
                            <input
                                type="text"
                                placeholder={t('common.search')}
                                className="input-field pl-12 pr-4 py-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow group-focus-within:shadow-lg ring-0"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Quick Category Filter */}
                        <div className="flex overflow-x-auto pb-2 gap-3 w-full md:w-auto no-scrollbar mask-linear-fade">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === 'all'
                                    ? 'bg-dz-green text-white shadow-lg shadow-dz-green/30 scale-105'
                                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-dz-green shadow-sm'}`}
                            >
                                {t('common.all')}
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-dz-green text-white shadow-lg shadow-dz-green/30 scale-105'
                                        : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-dz-green shadow-sm'}`}
                                >
                                    {cat.names[lang]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="py-32 text-center space-y-6 animate-pulse">
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
                        <Search size={40} />
                    </div>
                    <div>
                        <p className="text-slate-900 font-black text-2xl">{t('market.noProducts')}</p>
                        <p className="text-slate-400 mt-2">{lang === 'ar' ? 'حاول البحث بكلمات مختلفة' : 'Try adjusting your search filters'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Marketplace;
