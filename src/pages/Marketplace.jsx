import React, { useState } from 'react';
import ProductCard from '../components/marketplace/ProductCard';
import { useCart } from '../context/CartContext';
import { useApp } from '../context/AppContext';

const Marketplace = () => {
    const { addToCart } = useCart();
    const { t, lang } = useApp();
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [search, setSearch] = useState('');

    const categories = ['Tous', 'Légumes', 'Fruits', 'Olive & Huiles', 'Miel', 'Dattes', 'Herbes'];

    const products = [
        { id: 1, name: "Deglet Nour d'Algérie", price: 850, image: "https://images.unsplash.com/photo-1548826595-d9ce993f63ff?auto=format&fit=crop&q=80&w=600", category: "Dattes", unit: "kg", badge: "Bio", rating: "4.9" },
        { id: 2, name: "Huile d'Olive de Kabylie", price: 1200, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600", category: "Olive & Huiles", unit: "L", badge: "Premium", rating: "5.0" },
        { id: 3, name: "Oranges de Boufarik", price: 200, image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=600", category: "Fruits", unit: "kg", badge: "Frais", rating: "4.8" },
        { id: 4, name: "Tomates Fraîches", price: 120, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600", category: "Légumes", unit: "kg", badge: "Local", rating: "4.7" },
        { id: 5, name: "Miel pur d'Oranie", price: 3500, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600", category: "Miel", unit: "Pot", badge: "Naturel", rating: "5.0" },
        { id: 6, name: "Menthe Fraîche", price: 50, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=600", category: "Herbes", unit: "Botte", badge: "Saison", rating: "4.6" },
        { id: 7, name: "Poivrons Verts", price: 150, image: "https://images.unsplash.com/photo-1566384842113-ad7586a20831?auto=format&fit=crop&q=80&w=600", category: "Légumes", unit: "kg", badge: "Local", rating: "4.5" },
        { id: 8, name: "Pommes Rouges", price: 350, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?auto=format&fit=crop&q=80&w=600", category: "Fruits", unit: "kg", badge: "Frais", rating: "4.8" }
    ];

    const filteredProducts = products
        .filter(p => activeCategory === 'Tous' || p.category === activeCategory)
        .filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="pt-32 pb-24 px-6 bg-white dark:bg-slate-950 min-h-screen transition-colors">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dz-green/10 text-dz-green font-bold text-sm mb-6">
                        <span>🌿</span>
                        <span>{lang === 'ar' ? 'سوق الفلاح' : lang === 'fr' ? 'Marché du Terroir' : 'Farm Market'}</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        {lang === 'ar' ? 'السوق' : lang === 'fr' ? 'Le Marché' : 'The Market'}
                    </h1>
                    <p className="text-xl text-slate-400 dark:text-slate-500 max-w-2xl">
                        {lang === 'ar'
                            ? 'اكتشف ثروات الأرض الجزائرية. مباشرة من المزرعة إلى مطبخك.'
                            : lang === 'fr'
                            ? 'Découvrez la richesse du terroir algérien. Directement de la ferme à votre cuisine.'
                            : 'Discover the richness of Algerian terroir. Straight from farm to your kitchen.'}
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                                activeCategory === cat
                                    ? 'bg-dz-green text-white shadow-lg shadow-dz-green/20'
                                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search & Sort */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder={lang === 'ar' ? 'ابحث عن منتج...' : lang === 'fr' ? 'Rechercher un produit...' : 'Search a product...'}
                            className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:outline-none focus:border-dz-green focus:bg-white dark:focus:bg-slate-700 transition-all font-bold placeholder:text-slate-300 dark:placeholder:text-slate-500 text-slate-900 dark:text-white"
                        />
                        <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <select className="h-14 px-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 focus:outline-none focus:border-dz-green transition-all shadow-sm flex-1 md:flex-none">
                            <option>{lang === 'ar' ? 'ترتيب حسب السعر' : lang === 'fr' ? 'Trier par Prix' : 'Sort by Price'}</option>
                            <option>{lang === 'ar' ? 'الأحدث' : lang === 'fr' ? 'Nouveauté' : 'Newest'}</option>
                            <option>{lang === 'ar' ? 'التقييم' : lang === 'fr' ? 'Avis' : 'Rating'}</option>
                        </select>
                    </div>
                </div>

                {/* Results count */}
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-8">
                    {filteredProducts.length} {lang === 'ar' ? 'منتج' : lang === 'fr' ? 'produits trouvés' : 'products found'}
                </p>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <div className="text-6xl mb-6">🍃</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {lang === 'ar' ? 'لا توجد منتجات' : lang === 'fr' ? 'Aucun produit trouvé' : 'No products found'}
                        </h3>
                        <p className="text-slate-400 dark:text-slate-500">
                            {lang === 'ar' ? 'جرب فئة أو بحثاً آخر' : lang === 'fr' ? 'Essayez une autre catégorie ou recherche.' : 'Try a different category or search.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Marketplace;
