import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Plus, Trash2, Edit3, Barcode as BarcodeIcon, Package, DollarSign, Image as ImageIcon, Star, Download, Warehouse } from 'lucide-react';
import Barcode from 'react-barcode';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/algeria';

const FarmerDashboard = () => {
    const { user, products, setProducts, t, lang } = useApp();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [newProduct, setNewProduct] = useState({
        name: { en: '', fr: '', ar: '' },
        price: '',
        category: 'other',
        stock: '',
        image: 'https://images.unsplash.com/photo-1623337644941-484c24653736?auto=format&fit=crop&q=80&w=400'
    });

    const farmerProducts = products.filter(p => p.farmerId === 101); // Simulate current user's products

    const handleSave = (e) => {
        e.preventDefault();
        if (editingId) {
            setProducts(products.map(p => p.id === editingId ? { ...p, ...newProduct, price: Number(newProduct.price), stock: Number(newProduct.stock) } : p));
            setEditingId(null);
        } else {
            const product = {
                ...newProduct,
                id: Date.now(),
                farmerId: 101, // current user
                farmName: user?.name || 'Local Farm',
                wilaya: user?.wilaya || '16',
                baladiya: user?.baladiya || 'Alger Centre',
                price: Number(newProduct.price),
                stock: Number(newProduct.stock),
                rating: 5,
                reviews: []
            };
            setProducts([product, ...products]);
            setIsAdding(false);
        }
        setNewProduct({ name: { en: '', fr: '', ar: '' }, price: '', category: 'other', stock: '', image: 'https://images.unsplash.com/photo-1623337644941-484c24653736?auto=format&fit=crop&q=80&w=400' });
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800">{user?.name} {t('common.dashboard')}</h1>
                    <p className="text-slate-500">{user?.wilayaName}, {user?.baladiya}</p>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                    <Plus size={20} />
                    <span>Add New Product</span>
                </button>
            </div>

            {/* Stats Quick View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Active Listings', value: farmerProducts.length, icon: Package, color: 'text-dz-green bg-dz-green/10' },
                    { label: 'Total Stock', value: farmerProducts.reduce((acc, p) => acc + p.stock, 0), icon: Warehouse, color: 'text-blue-600 bg-blue-50' },
                    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-amber-500 bg-amber-50' }
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 flex items-center space-x-4 rtl:space-x-reverse">
                        <div className={`p-4 rounded-2xl ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                            <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product List */}
            <div className="glass-card overflow-hidden shadow-xl border-none">
                <table className="w-full text-left rtl:text-right">
                    <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
                        <tr>
                            <th className="px-6 py-4">{t('common.marketplace')}</th>
                            <th className="px-6 py-4">{t('common.category')}</th>
                            <th className="px-6 py-4">{t('common.price')}</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4">Barcode</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {farmerProducts.map(p => (
                            <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <img src={p.image} className="w-12 h-12 rounded-lg object-cover" />
                                        <span className="font-bold text-slate-700">{p.name[lang]}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                                        {p.category.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-black text-dz-green">{p.price} DZD</td>
                                <td className="px-6 py-4 font-medium text-slate-600">{p.stock}</td>
                                <td className="px-6 py-4">
                                    <div className="scale-75 origin-left">
                                        <Barcode value={`PROD-${p.id}`} height={30} width={1} fontSize={10} />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                                        <button className="p-2 text-slate-400 hover:text-dz-green bg-slate-100 rounded-lg"><Edit3 size={18} /></button>
                                        <button onClick={() => deleteProduct(p.id)} className="p-2 text-slate-400 hover:text-dz-red bg-slate-100 rounded-lg"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal (Simplified) */}
            <AnimatePresence>
                {(isAdding || editingId) && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <h2 className="text-2xl font-black mb-6">Add New Listing</h2>
                            <form onSubmit={handleSave} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input placeholder="Name (AR)" required className="input-field" value={newProduct.name.ar} onChange={e => setNewProduct({ ...newProduct, name: { ...newProduct.name, ar: e.target.value } })} />
                                    <input placeholder="Name (FR)" required className="input-field" value={newProduct.name.fr} onChange={e => setNewProduct({ ...newProduct, name: { ...newProduct.name, fr: e.target.value } })} />
                                    <input placeholder="Name (EN)" required className="input-field" value={newProduct.name.en} onChange={e => setNewProduct({ ...newProduct, name: { ...newProduct.name, en: e.target.value } })} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-3 text-slate-400" size={18} />
                                        <input type="number" placeholder="Price (DZD)" required className="input-field pl-10" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                                    </div>
                                    <div className="relative">
                                        <Package className="absolute left-3 top-3 text-slate-400" size={18} />
                                        <input type="number" placeholder="Stock Quantity" required className="input-field pl-10" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })} />
                                    </div>
                                </div>
                                <select className="input-field" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}>
                                    {categories.map(c => <option key={c.id} value={c.id}>{c.names[lang]}</option>)}
                                </select>
                                <div className="flex space-x-4">
                                    <button type="button" onClick={() => setIsAdding(false)} className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold">Cancel</button>
                                    <button type="submit" className="flex-1 btn-primary py-3">Save Product</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FarmerDashboard;
