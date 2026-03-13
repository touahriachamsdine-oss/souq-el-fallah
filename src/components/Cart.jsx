import React from 'react';
import { useApp } from '../context/AppContext';
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, setCart, t, lang } = useApp();

    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-800">Your cart is empty</h2>
                <p className="text-slate-500 max-w-sm mx-auto">Looks like you haven't added any fresh farm products yet. Explore the marketplace to find the best local produce!</p>
                <button className="btn-primary" onClick={() => window.history.back()}>Start Shopping</button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-black text-slate-800 mb-10">{t('common.cart')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                    <AnimatePresence>
                        {cart.map((item, index) => (
                            <motion.div
                                key={`${item.id}-${index}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="glass-card p-4 flex items-center gap-6"
                            >
                                <img src={item.image} className="w-24 h-24 rounded-2xl object-cover" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-800">{item.name[lang]}</h3>
                                    <p className="text-sm text-slate-500">{item.farmName}</p>
                                    <p className="text-lg font-black text-dz-green mt-2">{item.price} DZD</p>
                                </div>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="p-3 text-slate-400 hover:text-dz-red hover:bg-slate-100 rounded-xl transition-all"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="lg:col-span-1">
                    <div className="glass-card p-8 sticky top-32 bg-dz-green text-white">
                        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                        <div className="space-y-4 border-b border-white/20 pb-6">
                            <div className="flex justify-between">
                                <span className="opacity-80">Subtotal</span>
                                <span className="font-bold">{total} DZD</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="opacity-80">Delivery Fee</span>
                                <span className="font-bold">200 DZD</span>
                            </div>
                        </div>
                        <div className="pt-6 space-y-6">
                            <div className="flex justify-between text-2xl font-black">
                                <span>Total</span>
                                <span>{total + 200} DZD</span>
                            </div>
                            <Link to="/checkout" className="block w-full">
                                <button className="btn-primary w-full py-4 text-lg flex items-center justify-center space-x-2 rtl:space-x-reverse">
                                    <span>Checkout</span>
                                    {lang === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
