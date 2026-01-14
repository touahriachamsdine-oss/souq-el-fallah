import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { wilayas, baladiyat } from '../data/algeria';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, MapPin, Warehouse, ArrowRight, ArrowLeft } from 'lucide-react';

const AuthForms = ({ mode = 'login' }) => {
    const { t, setUser, lang } = useApp();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(mode === 'login');
    const [role, setRole] = useState('customer');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        farmName: '',
        wilaya: '',
        baladiya: '',
    });

    const getWilayaName = (wId) => {
        const w = wilayas.find(x => x.id === wId);
        return w ? (lang === 'ar' ? w.name_ar : lang === 'fr' ? w.name_fr : w.name_en) : '';
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        // Simulate auth
        const userObj = {
            ...formData,
            role,
            name: role === 'farmer' ? formData.farmName : formData.name,
            wilayaName: getWilayaName(formData.wilaya)
        };
        setUser(userObj);
        navigate(role === 'farmer' ? '/dashboard' : '/');
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full glass-card p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-800">
                        {isLogin ? t('common.login') : t('common.signup')}
                    </h2>
                    <p className="text-slate-500 mt-2">
                        {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}{' '}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-dz-green font-bold hover:underline"
                        >
                            {isLogin ? t('common.signup') : t('common.login')}
                        </button>
                    </p>
                </div>

                <form onSubmit={handleSumbit} className="space-y-4">
                    {!isLogin && (
                        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                            <button
                                type="button"
                                onClick={() => setRole('customer')}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${role === 'customer' ? 'bg-white text-dz-green shadow' : 'text-slate-400'}`}
                            >
                                {t('common.customer')}
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('farmer')}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${role === 'farmer' ? 'bg-white text-dz-green shadow' : 'text-slate-400'}`}
                            >
                                {t('common.farmer')}
                            </button>
                        </div>
                    )}

                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            {!isLogin && role === 'farmer' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <Warehouse className="absolute left-3 top-3 text-slate-400" size={20} />
                                        <input
                                            required
                                            type="text"
                                            placeholder={t('auth.farmName')}
                                            className="input-field pl-11 rtl:pl-4 rtl:pr-11"
                                            value={formData.farmName}
                                            onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <select
                                            required
                                            className="input-field"
                                            value={formData.wilaya}
                                            onChange={(e) => setFormData({ ...formData, wilaya: e.target.value, baladiya: '' })}
                                        >
                                            <option value="">{t('auth.selectWilaya')}</option>
                                            {wilayas.map(w => (
                                                <option key={w.id} value={w.id}>
                                                    {lang === 'ar' ? w.name_ar : lang === 'fr' ? w.name_fr : w.name_en}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            required
                                            disabled={!formData.wilaya}
                                            className="input-field disabled:opacity-50"
                                            value={formData.baladiya}
                                            onChange={(e) => setFormData({ ...formData, baladiya: e.target.value })}
                                        >
                                            <option value="">{t('auth.selectBaladiya')}</option>
                                            {formData.wilaya && baladiyat[formData.wilaya]?.map(b => (
                                                <option key={b.id} value={b.name_en}>
                                                    {lang === 'ar' ? b.name_ar : lang === 'fr' ? b.name_fr : b.name_en}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!isLogin && role === 'customer' && (
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-slate-400" size={20} />
                                <input
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                    className="input-field pl-11 rtl:pl-4 rtl:pr-11"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={20} />
                            <input
                                required
                                type="email"
                                placeholder={t('auth.email')}
                                className="input-field pl-11 rtl:pl-4 rtl:pr-11"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
                            <input
                                required
                                type="password"
                                placeholder={t('auth.password')}
                                className="input-field pl-11 rtl:pl-4 rtl:pr-11"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-3 mt-6 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <span>{isLogin ? t('common.login') : t('common.signup')}</span>
                        {lang === 'ar' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AuthForms;
