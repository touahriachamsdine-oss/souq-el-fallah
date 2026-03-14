import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const farmers = [
    {
        id: 1,
        name: "Brahim Aïssaoui",
        wilaya: "Béjaïa",
        region: "Kabylie",
        speciality: "Huile d'Olive & Figues",
        avatar: "https://i.pravatar.cc/150?u=farmer1",
        cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
        products: 12,
        rating: 4.9,
        reviews: 134,
        bio: "Producteur d'huile d'olive extra vierge depuis 3 générations. Certifié bio depuis 2015.",
        badges: ["Bio Certifié", "Premium Seller"],
        joined: "2021",
        verified: true,
    },
    {
        id: 2,
        name: "Yassine Hamidi",
        wilaya: "Biskra",
        region: "Ziban",
        speciality: "Dattes Deglet Nour",
        avatar: "https://i.pravatar.cc/150?u=farmer2",
        cover: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
        products: 8,
        rating: 5.0,
        reviews: 211,
        bio: "La famille Hamidi cultive les meilleures dattes du monde dans les oasis de Tolga.",
        badges: ["Top Vendeur", "Premium Seller"],
        joined: "2020",
        verified: true,
    },
    {
        id: 3,
        name: "Lakhdar Mebarki",
        wilaya: "Batna",
        region: "Aurès",
        speciality: "Miel des Aurès & Herbes",
        avatar: "https://i.pravatar.cc/150?u=farmer3",
        cover: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
        products: 6,
        rating: 4.8,
        reviews: 89,
        bio: "Apiculteur passionné dans les montagnes des Aurès. Miel de thym 100% naturel.",
        badges: ["Artisanal"],
        joined: "2022",
        verified: true,
    },
    {
        id: 4,
        name: "Fatima Oukaci",
        wilaya: "Tizi Ouzou",
        region: "Grande Kabylie",
        speciality: "Légumes de Montagne",
        avatar: "https://i.pravatar.cc/150?u=farmer4",
        cover: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
        products: 18,
        rating: 4.7,
        reviews: 67,
        bio: "Agricultrice moderne qui perpétue les savoirs ancestraux kabyles dans ses cultures.",
        badges: ["Bio Certifié"],
        joined: "2022",
        verified: false,
    },
    {
        id: 5,
        name: "Ahmed Sahraoui",
        wilaya: "El Oued",
        region: "Souf",
        speciality: "Pommes de Terre & Tomates",
        avatar: "https://i.pravatar.cc/150?u=farmer5",
        cover: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
        products: 10,
        rating: 4.6,
        reviews: 43,
        bio: "Dans les sables du désert, Ahmed produit des pommes de terre d'exception grâce à l'irrigation sahélienne.",
        badges: ["Nouveauté"],
        joined: "2023",
        verified: true,
    },
    {
        id: 6,
        name: "Moussa Belkacem",
        wilaya: "Blida",
        region: "Mitidja",
        speciality: "Agrumes & Clémentines",
        avatar: "https://i.pravatar.cc/150?u=farmer6",
        cover: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop",
        products: 14,
        rating: 4.9,
        reviews: 156,
        bio: "Les vergers de la Mitidja produisent les meilleures clémentines d'Algérie depuis le XVIIIe siècle.",
        badges: ["Top Vendeur", "Premium Seller"],
        joined: "2020",
        verified: true,
    },
];

const badgeStyles = {
    "Bio Certifié": "bg-emerald-100 text-emerald-700",
    "Premium Seller": "bg-amber-100 text-amber-700",
    "Top Vendeur": "bg-blue-100 text-blue-700",
    "Artisanal": "bg-purple-100 text-purple-700",
    "Nouveauté": "bg-rose-100 text-rose-700",
};

const FarmerCard = ({ farmer, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100"
    >
        {/* Cover image */}
        <div className="relative h-44 overflow-hidden">
            <img
                src={farmer.cover}
                alt={farmer.wilaya}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Region chip */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-black text-slate-900 uppercase tracking-wider">
                {farmer.wilaya}
            </div>
            {farmer.verified && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-dz-green/90 backdrop-blur-md text-[11px] font-bold text-white">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Vérifié
                </div>
            )}
        </div>

        {/* Avatar + content */}
        <div className="px-7 pb-7">
            <div className="flex items-end gap-4 -mt-10 mb-4">
                <img
                    src={farmer.avatar}
                    alt={farmer.name}
                    className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg object-cover"
                />
                <div className="pb-1">
                    <h3 className="font-black text-slate-900 text-lg leading-tight">{farmer.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{farmer.region}</p>
                </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {farmer.badges.map(badge => (
                    <span key={badge} className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${badgeStyles[badge] || 'bg-slate-100 text-slate-600'}`}>
                        {badge}
                    </span>
                ))}
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">{farmer.bio}</p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-black text-slate-800">{farmer.rating}</span>
                        <span className="text-slate-400">({farmer.reviews})</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">{farmer.products} produits</span>
                </div>
                <Link
                    to="/marketplace"
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-dz-green transition-all"
                >
                    Voir produits
                </Link>
            </div>
        </div>
    </motion.div>
);

const Farmers = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('Toutes');

    const regions = ['Toutes', 'Kabylie', 'Ziban', 'Aurès', 'Mitidja', 'Souf'];

    const filtered = farmers.filter(f => {
        const matchSearch = search === '' || f.name.toLowerCase().includes(search.toLowerCase()) || f.speciality.toLowerCase().includes(search.toLowerCase()) || f.wilaya.toLowerCase().includes(search.toLowerCase());
        const matchRegion = region === 'Toutes' || f.region === region;
        return matchSearch && matchRegion;
    });

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dz-green/10 text-dz-green text-sm font-semibold mb-6 border border-dz-green/20">
                        <span className="flex h-2 w-2 rounded-full bg-dz-green animate-pulse" />
                        {farmers.length}+ Agriculteurs Actifs
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Nos <span className="text-dz-green">Agriculteurs</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Rencontrez les hommes et femmes qui cultivent le meilleur terroir algérien. Des producteurs locaux, certifiés et passionnés.
                    </p>
                </motion.header>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { value: '500+', label: 'Agriculteurs', icon: '👨‍🌾' },
                        { value: '48', label: 'Wilayas', icon: '📍' },
                        { value: '3,200+', label: 'Produits', icon: '🌿' },
                        { value: '98%', label: 'Satisfaction', icon: '⭐' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-[1.5rem] border border-slate-100 p-6 text-center shadow-sm">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                            <div className="text-sm text-slate-400 font-medium mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Search + Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Rechercher un agriculteur, wilaya, spécialité..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full h-14 pl-14 pr-6 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:border-dz-green transition-all font-medium placeholder:text-slate-300 shadow-sm"
                        />
                        <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {regions.map(r => (
                            <button
                                key={r}
                                onClick={() => setRegion(r)}
                                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all ${region === r ? 'bg-dz-green text-white shadow-lg shadow-dz-green/20' : 'bg-white text-slate-500 border border-slate-100 hover:border-dz-green/30'}`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((farmer, i) => (
                            <FarmerCard key={farmer.id} farmer={farmer} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
                        <div className="text-6xl mb-6">👨‍🌾</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Aucun résultat</h3>
                        <p className="text-slate-400">Essayez une autre recherche ou région.</p>
                    </div>
                )}

                {/* CTA - Become a farmer */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 lg:p-16 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-dz-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Vous êtes agriculteur ?</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
                            Rejoignez notre plateforme et vendez vos produits directement aux consommateurs algériens. Zéro intermédiaire, 100% de vos revenus.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-dz-green text-white font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-dz-green/30 transform hover:-translate-y-1"
                        >
                            Devenir Vendeur
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Farmers;
