import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useApp } from '../../context/AppContext';
import LanguageSwitcher from '../LanguageSwitcher';

const SunIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
);

const MoonIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();
    const { t, lang, isDarkMode, toggleDarkMode } = useApp();
    const location = useLocation();
    const isRTL = lang === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('common.marketplace'), path: '/marketplace' },
        { name: t('nav.farmers'), path: '/farmers' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const navBg = isScrolled
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-100 dark:border-white/10'
        : 'bg-transparent';

    return (
        <nav
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 px-6 ${navBg}`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-dz-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-dz-green/20 group-hover:rotate-12 transition-transform">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 21l-8.228-3.111C3.308 17.584 3 17.062 3 16.486V7.514c0-.576.308-1.098.772-1.272L12 3l8.228 3.111C20.692 6.416 21 7.038 21 7.614v8.972c0 .576-.308 1.098-.772 1.272L12 21z" />
                        </svg>
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        Souq<span className="text-dz-green">.dz</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold transition-all hover:text-dz-green ${
                                location.pathname === link.path
                                    ? 'text-dz-green'
                                    : 'text-slate-600 dark:text-slate-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher */}
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>

                    {/* Dark Mode Toggle */}
                    <motion.button
                        id="dark-mode-toggle"
                        onClick={toggleDarkMode}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        className="relative p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-100 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors hidden md:flex items-center justify-center overflow-hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isDarkMode ? (
                                <motion.span
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SunIcon />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MoonIcon />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Cart */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors hidden md:flex"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-dz-green border-2 border-white dark:border-slate-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Login */}
                    <Link
                        to="/login"
                        className="px-6 py-3 rounded-2xl bg-slate-900 dark:bg-dz-green text-white font-bold text-sm hover:bg-dz-green dark:hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10"
                    >
                        {t('common.login')}
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-x-0 top-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-100 dark:border-white/10 p-8 shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-lg font-bold text-slate-900 dark:text-white hover:text-dz-green transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setIsCartOpen(true);
                                }}
                                className="flex items-center justify-between w-full text-lg font-bold text-slate-900 dark:text-white hover:text-dz-green transition-colors text-left"
                            >
                                <span>{t('common.cart')}</span>
                                {cartCount > 0 && (
                                    <span className="bg-dz-green text-white text-xs px-2 py-1 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Dark mode toggle in mobile */}
                            <button
                                onClick={toggleDarkMode}
                                className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white hover:text-dz-green transition-colors text-left"
                            >
                                <span>{isDarkMode ? <SunIcon /> : <MoonIcon />}</span>
                                <span>{isDarkMode ? 'Mode Clair' : 'Mode Sombre'}</span>
                            </button>

                            {/* Language switcher in mobile menu */}
                            <div className="pt-2 border-t border-slate-100 dark:border-white/10">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
