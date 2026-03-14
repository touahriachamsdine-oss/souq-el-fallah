import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CheckCircle, MapPin, Calendar, Info, ShieldCheck, Truck, Sprout, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Traceability = () => {
    const { id } = useParams();
    const { products, lang, t } = useApp();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <Info size={48} className="text-slate-300" />
                <h1 className="text-xl font-bold">Product ID not found</h1>
                <Link to="/" className="btn-primary">Back to Market</Link>
            </div>
        );
    }

    const journey = [
        { status: 'Harvesting', date: '21 Oct 2023', desc: 'Hand-picked at peak ripeness in Mascara farms.', icon: Sprout, color: 'text-emerald-500' },
        { status: 'Quality Inspection', date: '22 Oct 2023', desc: 'Passed laboratory checks for pesticide absence.', icon: ShieldCheck, color: 'text-blue-500' },
        { status: 'Cold Storage', date: '23 Oct 2023', desc: 'Maintained at 4°C to preserve nutrients and freshness.', icon: Award, color: 'text-amber-500' },
        { status: 'Transit to Hub', date: '24 Oct 2023', desc: 'Dispatched in refrigerated trucks to central Algiers.', icon: Truck, color: 'text-slate-500' }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[40px] shadow-2xl shadow-dz-green/5 overflow-hidden border border-slate-100"
            >
                <div className="bg-dz-green p-6 text-white text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-1 rounded-full mb-3">
                        <CheckCircle size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Verified Authenticity</span>
                    </div>
                    <h1 className="text-3xl font-black">{product.name[lang]}</h1>
                    <p className="opacity-80">Batch #{product.id.toString().slice(-6)}</p>
                </div>

                <div className="p-8 space-y-10">
                    {/* Farmer/Source Info */}
                    <div className="flex items-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <img 
                            src="https://images.unsplash.com/photo-1542444455-be4a59cf658a?auto=format&fit=crop&q=80&w=200" 
                            className="w-20 h-20 rounded-2xl object-cover shadow-lg border-2 border-white"
                            alt="Producer"
                        />
                        <div className="ml-6 rtl:mr-6 rtl:ml-0">
                            <h2 className="text-lg font-black text-slate-800">{product.farmName}</h2>
                            <div className="flex items-center text-slate-500 text-sm mt-1">
                                <MapPin size={14} className="mr-1 rtl:ml-1 rtl:mr-0" />
                                <span>Wilaya {product.wilaya}, {product.baladiya}</span>
                            </div>
                            <Link to={`/producer/${product.farmerId}`} className="text-dz-green text-sm font-bold hover:underline inline-block mt-2">
                                View Producer Profile →
                            </Link>
                        </div>
                    </div>

                    {/* Timeline Journey */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-slate-800 flex items-center">
                            <Calendar size={20} className="mr-2 rtl:ml-2 rtl:mr-0 text-dz-green" />
                            Product Journey
                        </h3>
                        <div className="relative pl-8 rtl:pr-8 rtl:pl-0 space-y-8 before:absolute before:left-3.5 rtl:before:right-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                            {journey.map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className={`absolute -left-8 rtl:-right-8 top-1 w-7 h-7 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center z-10 ${step.color}`}>
                                        <step.icon size={14} />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-black text-slate-700">{step.status}</h4>
                                            <span className="text-xs text-slate-400 font-bold">{step.date}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Tests */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-slate-800 flex items-center">
                            <ShieldCheck size={20} className="mr-2 rtl:ml-2 rtl:mr-0 text-dz-green" />
                            Lab Certifications
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="p-2 bg-emerald-600 text-white rounded-lg"><CheckCircle size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-emerald-800 uppercase">Pesticide Free</p>
                                    <p className="text-[10px] text-emerald-600">Verified Oct 2023</p>
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="p-2 bg-blue-600 text-white rounded-lg"><CheckCircle size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-blue-800 uppercase">Non-GMO</p>
                                    <p className="text-[10px] text-blue-600">Standard Algerian Grade A</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row gap-4">
                        <Link to={`/product/${product.id}`} className="flex-1 btn-primary text-center">
                            Order This Product
                        </Link>
                        <button className="flex-1 py-4 px-6 border-2 border-slate-200 rounded-2xl font-black text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
                             Learn About Our Standards
                        </button>
                    </div>
                </div>
            </motion.div>
            
            <p className="mt-8 text-center text-slate-400 text-xs px-8">
                This traceability report is generated by Souq El Fallah Blockchain-ready Trust Engine. 
                Data is provided by certified Algerian Agricultural Laboratories.
            </p>
        </div>
    );
};

export default Traceability;
