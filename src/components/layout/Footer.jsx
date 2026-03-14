import React from 'react';
import { useApp } from '../../context/AppContext';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    const { t } = useApp();

    return (
        <footer className="pt-24 pb-12 bg-slate-900 text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-3xl font-black tracking-tighter text-white">
                                SOUQ<span className="text-emerald-500">.</span>FALLAH
                            </span>
                            <p className="mt-6 text-slate-400 font-medium leading-relaxed">
                                الجزائر - Your direct bridge to Algerian farms. We bring nature's finest gifts to your market basket with premium quality and delivery.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 bg-white/5 hover:bg-emerald-600 transition-all rounded-2xl flex items-center justify-center group border border-white/10">
                                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black">Quick Navigation</h4>
                        <ul className="space-y-4">
                            {['About Farm Store', 'Our Producers', 'Quality Standards', 'Market Locations', 'Partner with Us'].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white">Talk to Specialist</p>
                                    <p className="text-slate-400 text-sm font-medium">+213 555 123 456</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white">Email Support</p>
                                    <p className="text-slate-400 text-sm font-medium">contact@souqelfallah.dz</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black">Algeria's Fresh Updates</h4>
                        <p className="text-slate-400 font-medium">Join 5000+ citizens receiving weekly farm fresh deals and agricultural news.</p>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 transition-all font-medium pr-16"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all group">
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-slate-500 font-medium text-sm">
                        © 2024 Souq El Fallah. Made for Algeria with <span className="text-rose-500">❤️</span>
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-slate-500 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors">Privacy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors">Terms</a>
                        <a href="#" className="text-slate-500 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
