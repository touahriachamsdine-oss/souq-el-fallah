import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MapPin, Star, ShieldCheck, Award, Users, Calendar, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const ProducerProfile = () => {
    const { id } = useParams();
    const { producers, products, lang, t } = useApp();
    
    // In a real app, we'd fetch producer data. For now, let's find or mock.
    const producerProducts = products.filter(p => p.farmerId === Number(id));
    const farmName = producerProducts.length > 0 ? producerProducts[0].farmName : "El-Amine Orchards";

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            {/* Hero Header */}
            <div className="relative h-64 rounded-[40px] overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover"
                    alt="Farm Cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 flex items-center">
                    <img 
                        src="https://images.unsplash.com/photo-1542444455-be4a59cf658a?auto=format&fit=crop&q=80&w=200" 
                        className="w-24 h-24 rounded-3xl border-4 border-white object-cover shadow-2xl"
                        alt="Farmer Avatar"
                    />
                    <div className="ml-6 text-white">
                        <h1 className="text-3xl font-black">{farmName}</h1>
                        <div className="flex items-center space-x-4 opacity-90 mt-1">
                            <span className="flex items-center text-sm font-bold bg-dz-green px-3 py-1 rounded-full text-white">
                                <ShieldCheck size={14} className="mr-1" /> Verified Expert
                            </span>
                            <span className="flex items-center text-sm font-bold">
                                <MapPin size={14} className="mr-1" /> Mascara, Algeria
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar: About */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-50">
                        <h3 className="text-xl font-black text-slate-800 mb-4">Our Story</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Family-owned since 1982, we specialize in high-altitude organic crops. 
                            Our mission is to bring traditional Algerian flavors with modern quality standards.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="text-center p-4 bg-slate-50 rounded-2xl">
                                <p className="text-2xl font-black text-dz-green">15+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Years</p>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-2xl">
                                <p className="text-2xl font-black text-dz-green">4.9</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Rating</p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <button className="w-full btn-primary py-3">Follow Farm</button>
                            <div className="flex justify-center space-x-6 text-slate-400 pt-2">
                                <Instagram className="hover:text-dz-green cursor-pointer" size={20} />
                                <Facebook className="hover:text-dz-green cursor-pointer" size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-dz-green p-8 rounded-[40px] text-white">
                        <h4 className="font-black text-lg mb-2">Support Local</h4>
                        <p className="text-white/80 text-sm mb-6">By buying from this farm, you help support 12 family members in Mascara.</p>
                        <Award size={48} className="opacity-30" />
                    </div>
                </div>

                {/* Main Content: Products */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-slate-800">Fresh from {farmName}</h2>
                        <span className="text-sm font-bold text-slate-400">{producerProducts.length} items available</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {producerProducts.map(product => (
                            <Link key={product.id} to={`/product/${product.id}`} className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-dz-green">
                                        {product.price} DA
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-black text-slate-800 text-lg">{product.name[lang]}</h3>
                                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider">{product.category}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center space-x-1 text-amber-500">
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-sm font-bold">4.8</span>
                                        </div>
                                        <div className="text-dz-green font-black flex items-center text-sm">
                                            Quick Order <ArrowRight size={14} className="ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProducerProfile;
