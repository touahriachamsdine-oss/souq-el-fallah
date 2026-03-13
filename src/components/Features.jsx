import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Clock, Leaf, Smartphone, Headphones } from 'lucide-react';

const Features = () => {
    const { t } = useApp();

    const features = [
        {
            icon: Leaf,
            title: t('features.fresh.title'),
            desc: t('features.fresh.desc'),
            color: 'emerald',
            shadow: 'shadow-emerald-200/50'
        },
        {
            icon: Truck,
            title: t('features.delivery.title'),
            desc: t('features.delivery.desc'),
            color: 'amber',
            shadow: 'shadow-amber-200/50'
        },
        {
            icon: ShieldCheck,
            title: t('features.quality.title'),
            desc: t('features.quality.desc'),
            color: 'blue',
            shadow: 'shadow-blue-200/50'
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            desc: "Dedicated support for all your needs and questions about produce.",
            color: 'rose',
            shadow: 'shadow-rose-200/50'
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Why Choose Souq El Fallah?
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                        We are committed to delivering the best of Algeria's farm produce directly to your doorstep with speed, care, and transparency.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className="group p-8 bg-white dark:bg-slate-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-none"
                        >
                            <div className={`w-16 h-16 mb-8 rounded-3xl bg-${feature.color}-50 dark:bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-400 group-hover:scale-110 transition-transform duration-500 shadow-lg ${feature.shadow}`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
