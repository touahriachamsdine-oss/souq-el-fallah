import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

const Contact = () => {
    const { t, lang } = useApp();
    const isRTL = lang === 'ar';

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: t('contact.phoneLabel'),
            value: t('contact.phoneValue'),
            hint: t('contact.phoneDesc'),
            color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: t('contact.emailLabel'),
            value: t('contact.emailValue'),
            hint: t('contact.emailDesc'),
            color: 'bg-blue-50 text-blue-600 border-blue-100',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: t('contact.addressLabel'),
            value: t('contact.addressValue'),
            hint: t('contact.addressDesc'),
            color: 'bg-amber-50 text-amber-600 border-amber-100',
        },
    ];

    const faqs = [
        {
            q: lang === 'ar' ? 'كيف أصبح بائعاً على سوق الفلاح؟' : lang === 'fr' ? 'Comment puis-je devenir vendeur sur Souq El Fallah ?' : 'How can I become a seller on Souq El Fallah?',
            a: lang === 'ar' ? 'أرسل لنا رسالة عبر النموذج. سيتصل بك فريقنا خلال 48 ساعة.' : lang === 'fr' ? 'Remplissez le formulaire. Notre équipe vous contactera sous 48h.' : 'Fill in the contact form. Our team will reach out within 48 hours.',
        },
        {
            q: lang === 'ar' ? 'ما هي مدة التوصيل؟' : lang === 'fr' ? 'Quels sont les délais de livraison ?' : 'What are the delivery times?',
            a: lang === 'ar' ? 'التوصيل خلال 24 إلى 72 ساعة حسب الولاية.' : lang === 'fr' ? 'Livraison en 24 à 72 heures selon votre wilaya.' : 'Delivery in 24 to 72 hours depending on your wilaya.',
        },
        {
            q: lang === 'ar' ? 'كيف يعمل التتبع بالبلوكتشين؟' : lang === 'fr' ? 'Comment fonctionne la traçabilité blockchain ?' : 'How does blockchain traceability work?',
            a: lang === 'ar' ? 'كل منتج له QR Code يمكنك مسحه لمعرفة أصل المنتج تفصيلاً.' : lang === 'fr' ? "Chaque produit a un QR code pour suivre son parcours complet." : 'Each product has a QR code — scan it to see its full journey.',
        },
        {
            q: lang === 'ar' ? 'هل يمكنني إلغاء طلبي؟' : lang === 'fr' ? 'Puis-je annuler ma commande ?' : 'Can I cancel my order?',
            a: lang === 'ar' ? 'يمكنك الإلغاء خلال ساعتين من تقديم الطلب.' : lang === 'fr' ? 'Vous disposez de 2 heures pour annuler après la commande.' : 'You have 2 hours after ordering to cancel.',
        },
    ];

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'question', message: '' });
    const [openFaq, setOpenFaq] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div dir={isRTL ? 'rtl' : 'ltr'} className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dz-green/10 text-dz-green text-sm font-semibold mb-6 border border-dz-green/20">
                        <span className="flex h-2 w-2 rounded-full bg-dz-green animate-pulse" />
                        {t('contact.badge')}
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        {t('contact.heroTitle').split(' ').map((w, i, arr) =>
                            i === arr.length - 1
                                ? <span key={i} className="text-dz-green"> {w}</span>
                                : <span key={i}>{w} </span>
                        )}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-xl mx-auto">
                        {t('contact.heroSubtitle')}
                    </p>
                </motion.header>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-3 gap-6 mb-20">
                    {contactMethods.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[2rem] border-2 ${m.color} text-center`}
                        >
                            <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm mb-5">
                                {m.icon}
                            </div>
                            <div className="font-black text-slate-900 text-lg mb-1">{m.label}</div>
                            <div className="font-bold text-slate-700 mb-2 text-sm">{m.value}</div>
                            <div className="text-xs text-slate-400 font-medium">{m.hint}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Form + FAQ */}
                <div className="grid lg:grid-cols-[1fr_420px] gap-14">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
                            <h2 className="text-2xl font-black text-slate-900 mb-2">{t('contact.formTitle')}</h2>
                            <p className="text-slate-400 font-medium mb-8">{t('contact.emailDesc')}</p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">{t('contact.successMsg')}</h3>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-black text-slate-700 mb-2">{t('contact.namePlaceholder')} *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                                placeholder={t('contact.namePlaceholder')}
                                                className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-dz-green focus:bg-white transition-all font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-black text-slate-700 mb-2">{t('contact.emailLabel')} *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                                placeholder={t('contact.emailPlaceholder')}
                                                className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-dz-green focus:bg-white transition-all font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-black text-slate-700 mb-2">{t('contact.subjectPlaceholder')}</label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-dz-green focus:bg-white transition-all font-medium text-slate-700"
                                        >
                                            <option value="question">{lang === 'ar' ? 'سؤال عام' : lang === 'fr' ? 'Question générale' : 'General question'}</option>
                                            <option value="farmer">{lang === 'ar' ? 'أريد أن أصبح فلاحاً' : lang === 'fr' ? 'Devenir Agriculteur Partenaire' : 'Become a partner farmer'}</option>
                                            <option value="order">{lang === 'ar' ? 'مشكلة في الطلب' : lang === 'fr' ? 'Problème de commande' : 'Order issue'}</option>
                                            <option value="partnership">{lang === 'ar' ? 'شراكة تجارية' : lang === 'fr' ? 'Partenariat B2B' : 'B2B Partnership'}</option>
                                            <option value="other">{lang === 'ar' ? 'أخرى' : lang === 'fr' ? 'Autre' : 'Other'}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-black text-slate-700 mb-2">{t('contact.messagePlaceholder')} *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                            placeholder={t('contact.messagePlaceholder')}
                                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:border-dz-green focus:bg-white transition-all font-medium placeholder:text-slate-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-2xl bg-dz-green text-white font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-dz-green/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        {t('contact.sendBtn')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-black text-slate-900 mb-8">{t('contact.faqTitle')}</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left gap-4"
                                    >
                                        <span className="font-bold text-slate-900 leading-snug">{faq.q}</span>
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${openFaq === i ? 'bg-dz-green border-dz-green text-white rotate-45' : 'border-slate-200 text-slate-400'}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="mt-10 p-8 bg-slate-900 rounded-[2rem] text-white">
                            <h3 className="font-black text-lg mb-2">{t('contact.followTitle')}</h3>
                            <p className="text-slate-400 text-sm mb-6">{lang === 'ar' ? 'أخبار، عروض اليوم وقصص الفلاحين.' : lang === 'fr' ? "Actualités, offres du jour et portraits d'agriculteurs." : 'News, daily deals and farmer spotlights.'}</p>
                            <div className="flex gap-3">
                                {['Facebook', 'Instagram', 'Twitter'].map((s, i) => (
                                    <a key={i} href="#" className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all">
                                        {s}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
