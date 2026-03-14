import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const SocialButton = ({ icon, label }) => (
    <button className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:border-dz-green/30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
        {icon}
        {label}
    </button>
);

const inputClass = "w-full px-5 py-3.5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-dz-green focus:bg-white dark:focus:bg-slate-700 transition-all font-medium placeholder:text-slate-300 dark:placeholder:text-slate-500 text-slate-800 dark:text-slate-100";

const Login = () => {
    const { t, lang, isDarkMode } = useApp();
    const isRTL = lang === 'ar';
    const [tab, setTab] = useState('login'); // 'login' | 'register'
    const [role, setRole] = useState('consumer'); // 'consumer' | 'plant-farmer' | 'livestock-farmer'
    const [showPass, setShowPass] = useState(false);

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({
        firstName: '', lastName: '', email: '', phone: '', password: '', confirm: '', wilaya: ''
    });

    const wilayas = [
        'Alger', 'Béjaïa', 'Biskra', 'Blida', 'Batna', 'Constantine', 'Oran',
        'Tizi Ouzou', 'Annaba', 'El Oued', 'Tlemcen', 'Sétif', 'Ouargla', 'Autre'
    ];

    // Multi-language role definitions
    const roles = [
        {
            key: 'consumer',
            emoji: '🛒',
            label: lang === 'ar' ? 'مستهلك' : lang === 'fr' ? 'Consommateur' : lang === 'kab' ? 'Aseqdac' : 'Consumer',
            desc: lang === 'ar' ? 'اطلب منتجات طازجة مباشرة' : lang === 'fr' ? 'Commandez des produits frais' : lang === 'kab' ? 'Aɣ ifis azedgan' : 'Order fresh products directly',
        },
        {
            key: 'plant-farmer',
            emoji: '🌾',
            label: lang === 'ar' ? 'مزارع نباتي' : lang === 'fr' ? 'Agriculteur' : lang === 'kab' ? 'Afelbaḥ n yemɣan' : 'Plant Farmer',
            desc: lang === 'ar' ? 'ابع محاصيلك الزراعية' : lang === 'fr' ? 'Vendez vos récoltes végétales' : lang === 'kab' ? 'Ets imɣan-ik' : 'Sell your crop harvest',
        },
        {
            key: 'livestock-farmer',
            emoji: '🐑',
            label: lang === 'ar' ? 'مربي مواشي' : lang === 'fr' ? 'Éleveur' : lang === 'kab' ? 'Ameddah n wulli' : 'Livestock Farmer',
            desc: lang === 'ar' ? 'ابع منتجات تربية المواشي' : lang === 'fr' ? 'Vendez vos produits d\'élevage' : lang === 'kab' ? 'Ets tifras n wulli' : 'Sell livestock products',
        },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login: ' + loginData.email);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        alert('Register: ' + registerData.email + ' — Role: ' + role);
    };

    return (
        <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-6 pt-24 pb-12"
        >
            <div className="w-full max-w-5xl grid lg:grid-cols-2 shadow-2xl rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900">

                {/* Left panel — branding */}
                <div className="hidden lg:flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-14 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-dz-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

                    <div className="relative z-10 flex flex-col h-full">
                        <Link to="/" className="inline-block mb-auto">
                            <span className="text-2xl font-black tracking-tighter">
                                SOUQ<span className="text-dz-green">.</span>FALLAH
                            </span>
                        </Link>

                        <div className="space-y-8 my-auto">
                            <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                {t('login.tagline')}
                            </p>
                            {[
                                {
                                    icon: '🌱',
                                    title: lang === 'ar' ? 'منتجات 100% محلية' : lang === 'fr' ? 'Produits 100% Locaux' : '100% Local Products',
                                    desc: lang === 'ar' ? 'مباشرة من المزارع الجزائرية' : lang === 'fr' ? 'Directement depuis les fermes algériennes.' : 'Directly from Algerian farms.'
                                },
                                {
                                    icon: '🔒',
                                    title: lang === 'ar' ? 'دفع آمن' : lang === 'fr' ? 'Paiement Sécurisé' : 'Secure Payment',
                                    desc: lang === 'ar' ? 'معاملاتك محمية ومشفرة' : lang === 'fr' ? 'Vos transactions sont protégées.' : 'Your transactions are protected.'
                                },
                                {
                                    icon: '🚚',
                                    title: lang === 'ar' ? 'توصيل سريع' : lang === 'fr' ? 'Livraison Rapide' : 'Fast Delivery',
                                    desc: lang === 'ar' ? 'استلم طلبك خلال 24 إلى 72 ساعة' : lang === 'fr' ? 'Recevez vos commandes en 24–72h.' : 'Receive orders in 24–72 hours.'
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <span className="text-3xl">{item.icon}</span>
                                    <div>
                                        <div className="font-black text-white">{item.title}</div>
                                        <div className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[11, 22, 33, 44].map(u => (
                                    <img key={u} src={`https://i.pravatar.cc/40?u=${u}`} alt="" className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover" />
                                ))}
                            </div>
                            <div>
                                <p className="font-black text-white text-sm">2,400+</p>
                                <p className="text-slate-400 text-xs font-medium">
                                    {lang === 'ar' ? 'عميل يثق بنا' : lang === 'fr' ? 'clients nous font confiance' : 'customers trust us'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right panel — form */}
                <div className="p-10 lg:p-14 flex flex-col justify-center bg-white dark:bg-slate-900">
                    {/* Tab switcher */}
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 mb-10">
                        {[
                            { key: 'login', label: t('login.loginBtn') },
                            { key: 'register', label: t('login.signupBtn') },
                        ].map(tb => (
                            <button
                                key={tb.key}
                                onClick={() => setTab(tb.key)}
                                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${tab === tb.key ? 'bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
                            >
                                {tb.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {tab === 'login' ? (
                            <motion.form
                                key="login"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.25 }}
                                onSubmit={handleLogin}
                                className="space-y-5"
                            >
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white">{t('login.loginTitle')} 👋</h2>
                                    <p className="text-slate-400 dark:text-slate-500 font-medium mt-1">{t('login.loginSubtitle')}</p>
                                </div>

                                {/* Social logins */}
                                <div className="flex gap-3 pt-2">
                                    <SocialButton
                                        label="Google"
                                        icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>}
                                    />
                                    <SocialButton
                                        label="Facebook"
                                        icon={<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>}
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
                                    <span className="text-xs font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">{t('login.orWith')}</span>
                                    <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700" />
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2">{t('login.emailLabel')}</label>
                                        <input
                                            type="email"
                                            required
                                            value={loginData.email}
                                            onChange={e => setLoginData(p => ({ ...p, email: e.target.value }))}
                                            placeholder={t('login.emailPlaceholder') || 'email@example.com'}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label className="text-sm font-black text-slate-700 dark:text-slate-300">{t('login.passwordLabel')}</label>
                                            <a href="#" className="text-xs text-dz-green font-bold hover:underline">{t('login.forgotPassword')}</a>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type={showPass ? 'text' : 'password'}
                                                required
                                                value={loginData.password}
                                                onChange={e => setLoginData(p => ({ ...p, password: e.target.value }))}
                                                placeholder="••••••••"
                                                className={`${inputClass} pr-14`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPass(!showPass)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                            >
                                                {showPass ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-dz-green text-white font-black text-base hover:bg-emerald-600 transition-all shadow-xl shadow-dz-green/20 transform hover:-translate-y-0.5 active:scale-95"
                                >
                                    {t('login.loginBtn')}
                                </button>

                                <p className="text-center text-sm text-slate-400 dark:text-slate-500">
                                    {t('login.noAccount')}{' '}
                                    <button type="button" onClick={() => setTab('register')} className="text-dz-green font-black hover:underline">
                                        {t('login.signupLink')}
                                    </button>
                                </p>
                            </motion.form>

                        ) : (
                            <motion.form
                                key="register"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25 }}
                                onSubmit={handleRegister}
                                className="space-y-5"
                            >
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white">{t('login.signupTitle')} 🌾</h2>
                                    <p className="text-slate-400 dark:text-slate-500 font-medium mt-1">{t('login.signupSubtitle')}</p>
                                </div>

                                {/* 3-Role selector */}
                                <div className="grid grid-cols-3 gap-2">
                                    {roles.map(r => (
                                        <button
                                            key={r.key}
                                            type="button"
                                            onClick={() => setRole(r.key)}
                                            className={`p-3 rounded-2xl border-2 text-left transition-all ${role === r.key ? 'border-dz-green bg-dz-green/5 dark:bg-dz-green/10' : 'border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'}`}
                                        >
                                            <div className="text-2xl mb-1">{r.emoji}</div>
                                            <div className="font-black text-slate-900 dark:text-white text-xs leading-tight">{r.label}</div>
                                            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5 leading-tight">{r.desc}</div>
                                        </button>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2">{t('login.firstNameLabel')}</label>
                                        <input type="text" required placeholder={t('login.firstNameLabel')} value={registerData.firstName}
                                            onChange={e => setRegisterData(p => ({ ...p, firstName: e.target.value }))} className={inputClass} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2">{t('login.lastNameLabel')}</label>
                                        <input type="text" required placeholder={t('login.lastNameLabel')} value={registerData.lastName}
                                            onChange={e => setRegisterData(p => ({ ...p, lastName: e.target.value }))} className={inputClass} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2">{t('login.emailLabel')}</label>
                                    <input type="email" required placeholder="email@example.com" value={registerData.email}
                                        onChange={e => setRegisterData(p => ({ ...p, email: e.target.value }))} className={inputClass} />
                                </div>

                                <div>
                                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 mb-2">{t('login.passwordLabel')}</label>
                                    <input type="password" required placeholder="••••••••" value={registerData.password}
                                        onChange={e => setRegisterData(p => ({ ...p, password: e.target.value }))} className={inputClass} />
                                </div>

                                <button type="submit" className="w-full py-4 rounded-2xl bg-dz-green text-white font-black text-base hover:bg-emerald-600 transition-all shadow-xl shadow-dz-green/20 transform hover:-translate-y-0.5 active:scale-95">
                                    {t('login.signupBtn')}
                                </button>

                                <p className="text-center text-xs text-slate-400 dark:text-slate-500">{t('login.termsNote')}</p>

                                <p className="text-center text-sm text-slate-400 dark:text-slate-500">
                                    {t('login.hasAccount')}{' '}
                                    <button type="button" onClick={() => setTab('login')} className="text-dz-green font-black hover:underline">
                                        {t('login.loginLink')}
                                    </button>
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Login;
