import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingCart, User, LogOut, Menu, X, Tractor } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { lang, setLang, t, user, setUser, cart } = useApp();
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/40 shadow-sm transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dz-green/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group rtl:space-x-reverse">
                        <div className="p-2.5 bg-gradient-to-br from-dz-green to-emerald-600 rounded-2xl group-hover:rotate-6 transition-all shadow-lg shadow-dz-green/30 ring-4 ring-green-50">
                            <Tractor className="text-white" size={26} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tight text-slate-800 group-hover:text-dz-green transition-colors">
                                {t('common.appName')}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-1 group-hover:text-dz-green/60 transition-colors">
                                Algerian Market
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                        <Link to="/" className="text-slate-600 hover:text-dz-green font-bold transition-colors relative group py-2">
                            {t('common.marketplace')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dz-green transition-all group-hover:w-full"></span>
                        </Link>

                        {user && (
                            <Link to="/dashboard" className="text-slate-600 hover:text-dz-green font-bold transition-colors relative group py-2">
                                {t('common.dashboard')}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dz-green transition-all group-hover:w-full"></span>
                            </Link>
                        )}

                        {/* Language Switcher */}
                        <div className="flex items-center bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50 backdrop-blur-sm">
                            {['en', 'fr', 'ar'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all ${lang === l ? 'bg-white text-dz-green shadow-sm ring-1 ring-black/5' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>

                        {/* Cart and Auth */}
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <Link to="/cart" className="relative p-3 text-slate-600 hover:bg-slate-50 hover:text-dz-green rounded-2xl transition-all border border-transparent hover:border-slate-100">
                                <ShoppingCart size={22} />
                                {cart.length > 0 && (
                                    <span className="absolute top-1 right-1 h-5 w-5 bg-dz-red text-white text-[10px] flex items-center justify-center rounded-full animate-bounce shadow-lg shadow-dz-red/30 border-2 border-white font-bold">
                                        {cart.length}
                                    </span>
                                )}
                            </Link>

                            {user ? (
                                <div className="flex items-center space-x-4 rtl:space-x-reverse pl-6 border-l-2 border-slate-100">
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <div className="w-10 h-10 bg-gradient-to-br from-dz-green/10 to-emerald-100 rounded-full flex items-center justify-center text-dz-green border-2 border-white shadow-sm">
                                            <User size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400 font-bold uppercase">Welcome</span>
                                            <span className="text-sm font-bold text-slate-800 leading-none">{user.name}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="p-2 text-slate-300 hover:text-dz-red hover:bg-red-50 rounded-xl transition-all"
                                        title={t('common.logout')}
                                    >
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="btn-primary group">
                                    <span>{t('common.login')}</span>
                                    <User size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link to="/cart" className="relative p-2 text-slate-600">
                            <ShoppingCart size={24} />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 h-5 w-5 bg-dz-red text-white text-[10px] flex items-center justify-center rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 p-6 space-y-6 shadow-xl absolute w-full z-40">
                    <Link to="/" className="block text-slate-700 font-bold text-lg py-2 border-b border-slate-50">{t('common.marketplace')}</Link>
                    {user && <Link to="/dashboard" className="block text-slate-700 font-bold text-lg py-2 border-b border-slate-50">{t('common.dashboard')}</Link>}
                    <div className="flex space-x-4 rtl:space-x-reverse pt-2">
                        {['en', 'fr', 'ar'].map(l => (
                            <button key={l} onClick={() => setLang(l)} className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all ${lang === l ? 'bg-dz-green text-white shadow-lg shadow-dz-green/20' : 'bg-slate-100 text-slate-500'}`}>
                                {l}
                            </button>
                        ))}
                    </div>
                    {!user && <Link to="/login" className="block btn-primary text-center w-full justify-center">{t('common.login')}</Link>}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
