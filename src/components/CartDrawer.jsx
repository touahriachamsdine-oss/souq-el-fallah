import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
    const { lang, t, cart, updateQuantity, removeFromCart, clearCart } = useApp();

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out" 
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md pointer-events-auto">
                    <div className="h-full flex flex-col bg-white dark:bg-slate-900 shadow-2xl transform transition ease-in-out duration-500 sm:duration-700">
                        {/* Header */}
                        <div className="px-6 py-6 sm:px-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-emerald-600 dark:bg-emerald-600 text-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{t('cart.title')}</h2>
                                    <p className="text-xs text-emerald-100 font-medium">
                                        {cart.length} {t('cart.items')}
                                    </p>
                                </div>
                            </div>
                            <button 
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items List */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 sm:px-8 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-full">
                                        <ShoppingBag className="w-20 h-20 text-slate-300 dark:text-slate-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                                            {t('cart.empty')}
                                        </h3>
                                        <p className="text-slate-500 max-w-[240px] mx-auto">
                                            {t('cart.emptySub')}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={onClose}
                                        className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        {t('cart.continueShop')}
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6 py-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4 group">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name[lang]} 
                                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex flex-1 flex-col">
                                                <div className="flex justify-between text-base font-bold text-slate-900 dark:text-white">
                                                    <h3 className="line-clamp-1">{item.name[lang]}</h3>
                                                    <p className="ml-4 tabular-nums text-emerald-600 dark:text-emerald-400">
                                                        {item.price * item.quantity} DA
                                                    </p>
                                                </div>
                                                <p className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-wider">
                                                    {item.price} DA / {item.unit}
                                                </p>
                                                <div className="flex flex-1 items-end justify-between text-sm mt-2">
                                                    <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-100 dark:border-slate-700">
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1.5 text-slate-500 hover:text-emerald-500 transition-colors"
                                                        >
                                                            <Minus className="w-3.5 h-3.5" />
                                                        </button>
                                                        <span className="w-8 text-center font-bold text-slate-800 dark:text-white tabular-nums">
                                                            {item.quantity}
                                                        </span>
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1.5 text-slate-500 hover:text-emerald-500 transition-colors"
                                                        >
                                                            <Plus className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1 p-2 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="border-t border-slate-100 dark:border-slate-800 px-6 py-8 sm:px-8 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md">
                                <div className="space-y-4 mb-8 text-slate-800 dark:text-slate-100">
                                    <div className="flex justify-between text-base font-medium">
                                        <p>{t('cart.subtotal')}</p>
                                        <p className="tabular-nums font-bold text-slate-900 dark:text-white">{total} DA</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium">
                                        <p>{t('cart.shipping')}</p>
                                        <p className="text-emerald-600 dark:text-emerald-400 font-bold uppercase text-xs tracking-widest">{t('cart.free')}</p>
                                    </div>
                                    <div className="flex justify-between text-xl font-black pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <p>{t('cart.total')}</p>
                                        <p className="tabular-nums text-emerald-600 dark:text-emerald-400">{total} DA</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button 
                                        className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-emerald-200 dark:shadow-none hover:shadow-emerald-300 dark:hover:shadow-none hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group"
                                    >
                                        {t('cart.checkout')}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={clearCart}
                                        className="text-sm font-bold text-slate-400 hover:text-rose-500 transition-colors py-2 px-4 rounded-xl border border-transparent hover:border-rose-100 dark:hover:border-rose-500/20"
                                    >
                                        {t('cart.clear')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
