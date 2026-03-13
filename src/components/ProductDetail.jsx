import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Star, MapPin, Tractor, ShoppingCart, ShieldCheck, Share2, Barcode as BarcodeIcon, QrCode as QrCodeIcon } from 'lucide-react';
import Barcode from 'react-barcode';
import { motion } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, lang, t, setCart } = useApp();
    const product = products.find(p => p.id === Number(id));

    if (!product) return <div className="p-20 text-center">Product not found</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery (Simulated) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]">
                        <img src={product.image} className="w-full h-full object-cover" alt={product.name[lang]} />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer hover:border-dz-green transition-all">
                                <img src={product.image} className="w-full h-full object-cover opacity-50 hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Info Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="bg-dz-green/10 text-dz-green px-4 py-1 rounded-full text-sm font-bold uppercase">
                                {product.category}
                            </span>
                            <div className="flex items-center text-amber-500 font-bold px-2">
                                <Star size={18} fill="currentColor" />
                                <span className="ml-1 rtl:mr-1">{product.rating} (12 reviews)</span>
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-800">{product.name[lang]}</h1>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 py-4 border-b border-slate-100">
                            <div>
                                <p className="text-3xl font-black text-dz-green">{product.price} DZD <span className="text-sm text-slate-400 font-medium">/ Unit</span></p>
                            </div>
                            <div className="h-8 w-[2px] bg-slate-100"></div>
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-500 font-medium">
                                <ShieldCheck className="text-dz-green" />
                                <span>Verified Authenticity</span>
                            </div>
                        </div>
                    </div>

                    {/* Farm Details */}
                    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-dz-green shadow-sm">
                                <Tractor size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">{product.farmName}</h3>
                                <div className="flex items-center text-slate-500 text-sm space-x-1 rtl:space-x-reverse">
                                    <MapPin size={14} className="text-dz-green" />
                                    <span>{product.baladiya}, {product.wilaya}</span>
                                </div>
                            </div>
                            <button className="mr-auto rtl:ml-auto btn-primary bg-white text-dz-green border border-dz-green hover:bg-dz-green hover:text-white px-4">
                                Visit Farm
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Fresh, organic products harvested directly from the fertile lands of {product.baladiya}.
                            No preservatives, no chemicals. 100% natural and healthy for your family.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setCart(prev => [...prev, product])}
                            className="flex-1 btn-primary py-4 flex items-center justify-center space-x-3 rtl:space-x-reverse text-xl"
                        >
                            <ShoppingCart size={24} />
                            <span>{t('market.buyNow')}</span>
                        </button>
                        <button className="p-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-600">
                            <Share2 size={24} />
                        </button>
                    </div>

                    {/* Barcode & QR Code Section */}
                    <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-8">
                        {/* Barcode */}
                        <div className="flex-1 min-w-[200px]">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                                <BarcodeIcon size={14} />
                                <span>Product Barcode</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 inline-block shadow-sm">
                                <Barcode value={`PROD-${product.id}`} height={50} width={1.5} fontSize={12} />
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="flex-1 min-w-[200px]">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                                <QrCodeIcon size={14} />
                                <span>Product QR Code (Scan for Info)</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 inline-block shadow-sm">
                                <QRCodeCanvas
                                    value={JSON.stringify({
                                        id: product.id,
                                        name: product.name[lang],
                                        price: `${product.price} DZD`,
                                        farm: product.farmName,
                                        location: `${product.baladiya}, ${product.wilaya}`,
                                        url: window.location.href
                                    }, null, 2)}
                                    size={100}
                                    level={"H"}
                                    includeMargin={false}
                                    imageSettings={{
                                        src: "/favicon.svg", // Assuming there's a logo or favicon
                                        x: undefined,
                                        y: undefined,
                                        height: 20,
                                        width: 20,
                                        excavate: true,
                                    }}
                                />
                            </div>
                            <p className="mt-2 text-[10px] text-slate-400 max-w-[150px]">
                                Contains encrypted product identity and traceability data.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Reviews Section */}
            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-black text-slate-800">{t('market.reviews')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                        <div key={i} className="glass-card p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <div className="w-10 h-10 bg-dz-green/10 rounded-full flex items-center justify-center font-bold text-dz-green">A</div>
                                    <span className="font-bold text-slate-700">Ali Benali</span>
                                </div>
                                <div className="flex text-amber-500">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="text-slate-500 italic">"Ghjith the best honey I've ever tasted. The packaging was safe and the delivery was fast. Definitely buying again!"</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
