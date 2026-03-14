import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const timeline = [
    { year: '2020', title: { fr: "Naissance de l'idée", en: 'The Idea', ar: 'ميلاد الفكرة' }, desc: { fr: "Trois amis algériens constatent le problème des intermédiaires.", en: 'Three Algerian friends tackle the middleman problem.', ar: 'ثلاثة أصدقاء جزائريون يواجهون مشكلة الوسطاء.' } },
    { year: '2021', title: { fr: 'Premier marché pilote', en: 'First Pilot', ar: 'أول إطلاق تجريبي' }, desc: { fr: 'Lancement bêta avec 12 agriculteurs de Kabylie et Biskra.', en: 'Beta launch with 12 farmers from Kabylie and Biskra.', ar: 'إطلاق تجريبي مع 12 فلاحاً من القبائل وبسكرة.' } },
    { year: '2022', title: { fr: 'Expansion nationale', en: 'National Expansion', ar: 'التوسع الوطني' }, desc: { fr: 'Plus de 100 agriculteurs de 28 wilayas. Première certification blockchain.', en: 'Over 100 farmers from 28 wilayas. First blockchain certification.', ar: 'أكثر من 100 فلاح من 28 ولاية. أول اعتماد بلوكتشين.' } },
    { year: '2023', title: { fr: 'Reconnaissance', en: 'Recognition', ar: 'التقدير' }, desc: { fr: "Prix de l'innovation agricole et 2,400 clients satisfaits.", en: 'Agricultural innovation award and 2,400 happy customers.', ar: 'جائزة الابتكار الزراعي و2400 عميل راضٍ.' } },
    { year: '2024', title: { fr: 'Souq El Fallah 2.0', en: 'Souq El Fallah 2.0', ar: 'سوق الفلاح 2.0' }, desc: { fr: 'Refonte avec traçabilité avancée, paiement sécurisé et app mobile.', en: 'Full redesign with advanced traceability, secure payment, mobile app.', ar: 'إعادة تصميم كاملة مع تتبع متقدم ودفع آمن وتطبيق موبايل.' } },
];

const team = [
    { name: 'Karim Boudjemaa', role: { fr: 'CEO & Co-Fondateur', en: 'CEO & Co-Founder', ar: 'الرئيس التنفيذي والمؤسس المشارك' }, avatar: 'https://i.pravatar.cc/150?u=ceo', bio: { fr: "Ex-ingénieur agronome, passionné de tech et d'agriculture durable.", en: 'Former agronomist, passionate about tech and sustainable farming.', ar: 'مهندس زراعي سابق، شغوف بالتكنولوجيا والزراعة المستدامة.' } },
    { name: 'Sara Mebarki', role: { fr: 'CTO & Co-Fondatrice', en: 'CTO & Co-Founder', ar: 'المديرة التقنية والمؤسسة المشاركة' }, avatar: 'https://i.pravatar.cc/150?u=cto', bio: { fr: "Développeuse full-stack avec 10 ans d'expérience.", en: 'Full-stack developer with 10 years of experience.', ar: 'مطورة شاملة بخبرة 10 سنوات.' } },
    { name: 'Rachid Aïssaoui', role: { fr: 'Directeur des Partenariats', en: 'Head of Partnerships', ar: 'مدير الشراكات' }, avatar: 'https://i.pravatar.cc/150?u=dir', bio: { fr: "Ancien responsable d'une coopérative de Béjaïa.", en: 'Former cooperative manager from Béjaïa.', ar: 'مسؤول سابق لتعاونية في بجاية.' } },
    { name: 'Nadia Hamidi', role: { fr: 'Responsable Marketing', en: 'Marketing Lead', ar: 'مسؤولة التسويق' }, avatar: 'https://i.pravatar.cc/150?u=mkt', bio: { fr: 'Spécialiste en marketing digital dans le secteur agroalimentaire.', en: 'Digital marketing specialist in the agri-food sector.', ar: 'متخصصة في التسويق الرقمي في القطاع الزراعي.' } },
];

const valueColors = ['bg-emerald-50 border-emerald-100', 'bg-blue-50 border-blue-100', 'bg-amber-50 border-amber-100', 'bg-rose-50 border-rose-100'];
const valueEmojis = ['🌱', '🤝', '🔍', '🇩🇿'];

const About = () => {
    const { t, lang } = useApp();
    const isRTL = lang === 'ar';

    const values = [
        { emoji: valueEmojis[0], title: t('about.value1Title'), desc: t('about.value1Desc'), color: valueColors[0] },
        { emoji: valueEmojis[1], title: t('about.value2Title'), desc: t('about.value2Desc'), color: valueColors[1] },
        { emoji: valueEmojis[2], title: t('about.value3Title'), desc: t('about.value3Desc'), color: valueColors[2] },
        { emoji: valueEmojis[3], title: t('about.value4Title'), desc: t('about.value4Desc'), color: valueColors[3] },
    ];

    return (
        <div dir={isRTL ? 'rtl' : 'ltr'} className="pt-32 pb-24">

            {/* Hero section */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dz-green/10 text-dz-green text-sm font-semibold mb-6 border border-dz-green/20">
                            <span className="flex h-2 w-2 rounded-full bg-dz-green animate-pulse" />
                            {t('about.badge')}
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-7 tracking-tight leading-[1.1]">
                            {t('about.heroTitle')}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-8">
                            {t('about.heroSubtitle')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/marketplace" className="px-8 py-4 rounded-2xl bg-dz-green text-white font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-dz-green/30 transform hover:-translate-y-1">
                                {t('about.ctaBtn')}
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-900 font-bold hover:border-dz-green/30 transition-all transform hover:-translate-y-1">
                                {t('nav.contact')}
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
                                alt="Ferme algérienne"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-[1.5rem] shadow-2xl border border-slate-50 z-10">
                            <div className="text-3xl font-black text-slate-900">2,400+</div>
                            <div className="text-sm text-slate-500 font-medium">{lang === 'ar' ? 'عميل راضٍ' : lang === 'fr' ? 'Clients satisfaits' : 'Happy customers'}</div>
                        </div>
                        <div className="absolute -top-6 -right-6 p-6 bg-dz-green rounded-[1.5rem] shadow-2xl z-10 text-white">
                            <div className="text-3xl font-black">500+</div>
                            <div className="text-sm font-medium opacity-80">{lang === 'ar' ? 'فلاح شريك' : lang === 'fr' ? 'Agriculteurs partenaires' : 'Partner farmers'}</div>
                        </div>
                        <div className="absolute -top-12 left-0 w-72 h-72 bg-dz-green/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">{t('about.valuesTitle')}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-[2rem] border-2 ${v.color} hover:shadow-lg transition-all`}
                            >
                                <div className="text-5xl mb-6">{v.emoji}</div>
                                <h3 className="text-lg font-black text-slate-900 mb-3">{v.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="px-6 mb-32 bg-slate-50 -mx-0 py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">{t('about.timelineTitle')}</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 items-start"
                                >
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-dz-green flex items-center justify-center shadow-lg z-10 relative">
                                            <span className="text-xs font-black text-dz-green">{item.year}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-100 flex-1">
                                        <h3 className="font-black text-slate-900 text-lg mb-2">{item.title[lang] || item.title.fr}</h3>
                                        <p className="text-slate-500 leading-relaxed">{item.desc[lang] || item.desc.fr}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">{t('about.teamTitle')}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 text-center shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group"
                            >
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-2xl object-cover mx-auto mb-5 ring-4 ring-slate-50 group-hover:ring-dz-green/30 transition-all"
                                />
                                <h3 className="font-black text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-sm text-dz-green font-bold mb-4">{member.role[lang] || member.role.fr}</p>
                                <p className="text-sm text-slate-400 leading-relaxed">{member.bio[lang] || member.bio.fr}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission CTA */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] bg-gradient-to-br from-dz-green via-emerald-600 to-dz-green p-12 lg:p-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        </div>
                        <div className="relative z-10">
                            <div className="text-6xl mb-6">🌾</div>
                            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                                {t('about.ctaTitle')}
                            </h2>
                            <p className="text-emerald-100 max-w-2xl mx-auto mb-10 text-lg">
                                {t('about.ctaDesc')}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/marketplace" className="px-8 py-4 rounded-2xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-all shadow-xl transform hover:-translate-y-1">
                                    {t('about.ctaBtn')}
                                </Link>
                                <Link to="/contact" className="px-8 py-4 rounded-2xl bg-white/20 text-white font-bold border border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm transform hover:-translate-y-1">
                                    {t('nav.contact')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
