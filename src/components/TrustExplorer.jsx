import React, { useState, useEffect } from 'react';
import { Database, ShieldCheck, Activity, Search, ExternalLink, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TrustExplorer = () => {
    const [blocks, setBlocks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock blockchain data generation
    useEffect(() => {
        const initialBlocks = [
            { id: '0x8f2...ae3', type: 'HARVEST', entity: 'Farmer Ahmed', timestamp: '2 mins ago', status: 'Verified' },
            { id: '0x4c1...91b', type: 'QUALITY_CERT', entity: 'Lab Algiers', timestamp: '15 mins ago', status: 'Certified' },
            { id: '0xe2a...772', type: 'TRANSIT', entity: 'ColdTruck DZ', timestamp: '1 hour ago', status: 'Live' },
            { id: '0x91d...fb4', type: 'LISTING', entity: 'Souq Central', timestamp: '3 hours ago', status: 'Active' },
        ];
        setBlocks(initialBlocks);
        setLoading(false);

        // Simulate real-time updates
        const interval = setInterval(() => {
            const newBlock = {
                id: `0x${Math.random().toString(16).slice(2, 5)}...${Math.random().toString(16).slice(2, 5)}`,
                type: ['HARVEST', 'QC', 'TRANSIT', 'LISTING'][Math.floor(Math.random() * 4)],
                entity: ['Local Lab B', 'Zeralda Farm', 'Express Logics', 'Souq Node'][Math.floor(Math.random() * 4)],
                timestamp: 'Just now',
                status: 'Confirming'
            };
            setBlocks(prev => [newBlock, ...prev.slice(0, 5)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 flex items-center">
                        <Database className="mr-3 text-dz-green" size={32} />
                        Trust Ledger
                    </h1>
                    <p className="text-slate-500 font-bold">Real-time transparency for every product in our market.</p>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 p-2 rounded-2xl">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-dz-green/20 flex items-center justify-center">
                                <Activity size={12} className="text-dz-green" />
                            </div>
                        ))}
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase pr-2">12 Active Nodes</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Stats */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Weekly Volume</p>
                        <h4 className="text-2xl font-black text-slate-800 tracking-tighter">1,280 Tons</h4>
                        <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-dz-green w-[70%]" />
                        </div>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-[32px] text-white">
                        <Cpu className="text-dz-green mb-4" size={24} />
                        <h4 className="text-lg font-black">AI Audit Active</h4>
                        <p className="text-white/40 text-xs mt-2 leading-relaxed">Continuous verification of supply chain movements for predictive freshness.</p>
                    </div>
                </div>

                {/* Ledger Feed */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="relative overflow-hidden bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-slate-200/50">
                        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Search size={18} className="text-slate-300" />
                                <input 
                                    type="text" 
                                    placeholder="Search Hash / Batch ID..." 
                                    className="bg-transparent border-none outline-none text-sm font-bold w-64"
                                />
                            </div>
                            <div className="flex items-center space-x-4 text-xs font-black text-dz-green">
                                <span>MAINNET</span>
                                <div className="w-2 h-2 rounded-full bg-dz-green animate-pulse" />
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4">
                                <AnimatePresence initial={false}>
                                    {blocks.map((block, idx) => (
                                        <motion.div 
                                            key={block.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="group flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 rounded-xl bg-dz-green/5 flex items-center justify-center">
                                                    <ShieldCheck size={20} className="text-dz-green" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <h5 className="font-black text-slate-800">{block.type}</h5>
                                                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold text-slate-400">{block.id}</span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 font-bold">{block.entity} • {block.timestamp}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className={`text-[10px] font-black px-3 py-1 rounded-full ${block.status === 'Verified' ? 'bg-emerald-100 text-emerald-600' : 'bg-dz-green/10 text-dz-green'}`}>
                                                    {block.status}
                                                </span>
                                                <ExternalLink size={14} className="text-slate-300 group-hover:text-dz-green cursor-pointer" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustExplorer;
