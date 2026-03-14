import React from 'react';
import { useApp } from '../context/AppContext';

const LanguageSwitcher = () => {
    const { lang, setLang } = useApp();

    const languages = [
        { code: 'en', label: 'EN', flag: '🇬🇧' },
        { code: 'fr', label: 'FR', flag: '🇫🇷' },
        { code: 'ar', label: 'ع', flag: '🇩🇿' },
    ];

    return (
        <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            {languages.map((l) => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                        lang === l.code
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-400 hover:text-slate-600'
                    }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
