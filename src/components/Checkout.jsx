import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { CreditCard, Truck, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ALGERIAN_WILAYAS = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
  "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda",
  "Skikda", "Sidi Bel Abbès", "Annabba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla",
  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
  "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar",
  "Ouled Djellal", "Béni Abbès", "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
];

const Checkout = () => {
  const { cart, setCart, lang, t } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    wilaya: 'Algiers',
    address: '',
    paymentMethod: 'cod'
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = 350; // Standard Algerian delivery fee simulation
  const total = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    setStep(3);
    setCart([]); // Clear cart
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-slate-800">Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="btn-primary mt-6">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-dz-green text-white shadow-lg shadow-dz-green/30' : 'bg-slate-200 text-slate-500'}`}>1</div>
          <div className={`h-1 w-12 rounded-full ${step >= 2 ? 'bg-dz-green' : 'bg-slate-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-dz-green text-white shadow-lg shadow-dz-green/30' : 'bg-slate-200 text-slate-500'}`}>2</div>
        </div>
        <h1 className="text-3xl font-black text-slate-800">
          {step === 1 ? 'Delivery Info' : step === 2 ? 'Payment & Confirm' : 'Order Success'}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-dz-green outline-none transition-all"
                  placeholder="Mohammed"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-dz-green outline-none transition-all"
                  placeholder="Khedim"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-dz-green outline-none transition-all"
                placeholder="05 55 55 55 55"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Wilaya</label>
              <select
                name="wilaya"
                value={formData.wilaya}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-dz-green outline-none transition-all"
              >
                {ALGERIAN_WILAYAS.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Address Details</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-dz-green outline-none transition-all h-24"
                placeholder="Street name, house number..."
              />
            </div>
            <button onClick={() => setStep(2)} className="btn-primary w-full py-4 text-lg">
              Next: Payment Method
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="space-y-4">
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${formData.paymentMethod === 'cod' ? 'border-dz-green bg-dz-green/5' : 'border-slate-100'}`}
                onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'cod' ? 'border-dz-green bg-dz-green' : 'border-slate-300'}`}>
                  {formData.paymentMethod === 'cod' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="w-12 h-12 bg-dz-green/10 rounded-xl flex items-center justify-center text-dz-green">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Cash on Delivery</h4>
                  <p className="text-xs text-slate-500">Pay when you receive your farm products.</p>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${formData.paymentMethod === 'edahabia' ? 'border-dz-green bg-dz-green/5' : 'border-slate-100 opacity-60'}`}
                // onClick={() => setFormData({...formData, paymentMethod: 'edahabia'})} // Disabled for now
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'edahabia' ? 'border-dz-green bg-dz-green' : 'border-slate-300'}`}>
                  {formData.paymentMethod === 'edahabia' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">EDAHABIA (Coming Soon)</h4>
                  <p className="text-xs text-slate-500">Fast and secure online payment.</p>
                </div>
              </div>
            </div>

            <button onClick={handlePlaceOrder} className="btn-primary w-full py-4 text-lg">
              Place Order ({total} DZD)
            </button>
            <button onClick={() => setStep(1)} className="w-full text-slate-400 font-bold py-2">
              Back to Shipping
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <div className="col-span-1 md:col-span-2 text-center py-20 space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-24 h-24 bg-dz-green text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-dz-green/30"
            >
              <CheckCircle size={48} />
            </motion.div>
            <h2 className="text-4xl font-black text-slate-800">Order Placed Successfully!</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Your order for {formData.wilaya} has been received. Our farmer partners will start preparing your fresh harvest right away.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => navigate('/')} className="btn-primary">View More Products</button>
              <button className="px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50">View Order Tracking</button>
            </div>
          </div>
        )}

        {step !== 3 && (
          <div className="lg:col-span-1">
            <div className="glass-card p-6 border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h3>
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-6 border-b pb-6">
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">{item.name[lang]}</p>
                        <p className="text-xs text-slate-500">{item.farmName}</p>
                      </div>
                    </div>
                    <span className="font-bold">{item.price} DZD</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-bold text-slate-700">{subtotal} DZD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Delivery ({formData.wilaya})</span>
                  <span className="font-bold text-slate-700">{deliveryFee} DZD</span>
                </div>
                <div className="flex justify-between text-xl font-black text-dz-green pt-4 border-t">
                  <span>Total</span>
                  <span>{total} DZD</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
